const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://sitesupervise-backend-12.onrender.com/api/v1/auth';

interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user?: {
    id: string;
    email: string;
    fullname: string;
    role: string;
  };
  message?: string;
  user_id?: string;
}

interface RegisterData {
  email: string;
  fullname: string;
  password: string;
  role: 'STAFF' | 'PROJECT_MANAGER' | 'PARTNER' | 'CLIENT';
}

interface LoginData {
  email: string;
  password: string;
  role: 'STAFF' | 'PROJECT_MANAGER' | 'PARTNER' | 'CLIENT';
}

class AuthService {
  private static instance: AuthService;
  private requestQueue: Map<string, Promise<any>> = new Map();

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  private async makeRequest(endpoint: string, options: RequestInit, retry = true): Promise<any> {
    const cacheKey = `${endpoint}-${JSON.stringify(options)}`;
    
    if (this.requestQueue.has(cacheKey)) {
      return this.requestQueue.get(cacheKey);
    }

    const request = fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    }).then(async (response) => {
      let data;
      try {
        data = await response.json();
      } catch {
        data = { error: `Server error: ${response.status}` };
      }
      
      if (!response.ok) {
        if (response.status === 401 && retry && endpoint !== '/refresh/' && endpoint !== '/login/') {
          try {
            await this.refreshToken();
            return this.makeRequest(endpoint, options, false);
          } catch {
            this.clearTokens();
            window.location.href = '/signin';
          }
        }
        const errorMessage = data.detail || data.error || data.message || 
          (data.non_field_errors && data.non_field_errors[0]) ||
          Object.values(data).flat().join(', ') || `Server error: ${response.status}`;
        throw new Error(errorMessage);
      }
      return data;
    }).finally(() => {
      this.requestQueue.delete(cacheKey);
    });

    this.requestQueue.set(cacheKey, request);
    return request;
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await this.makeRequest('/register/', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (response.access_token) {
      this.setTokens(response.access_token, response.refresh_token);
    }

    return response;
  }

  async login(data: LoginData): Promise<AuthResponse> {
    const response = await this.makeRequest('/login/', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (response.access_token) {
      this.setTokens(response.access_token, response.refresh_token);
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user));
      }
    }

    return response;
  }

  async refreshToken(): Promise<string> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await this.makeRequest('/refresh/', {
      method: 'POST',
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (response.access) {
      localStorage.setItem('access_token', response.access);
      if (response.refresh) {
        localStorage.setItem('refresh_token', response.refresh);
      }
      return response.access;
    }

    throw new Error('Failed to refresh token');
  }

  async forgotPassword(email: string): Promise<{ message: string; email_sent?: boolean }> {
    return await this.makeRequest('/forgot-password/', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  async resetPassword(token: string, password: string, password_confirm: string): Promise<{ message: string }> {
    return await this.makeRequest('/reset-password/', {
      method: 'POST',
      body: JSON.stringify({ token, password, password_confirm }),
    });
  }

  async logout(): Promise<void> {
    this.clearTokens();
  }

  private setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  }

  private clearTokens(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  }

  async getValidAccessToken(): Promise<string | null> {
    const token = this.getAccessToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const isExpired = payload.exp * 1000 < Date.now();
      
      if (isExpired) {
        await this.refreshToken();
        return this.getAccessToken();
      }
      return token;
    } catch {
      return token;
    }
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  private getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }
}

export const authService = AuthService.getInstance();
export type { RegisterData, LoginData, AuthResponse };