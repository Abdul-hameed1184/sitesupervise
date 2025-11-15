"use client";
import { useEffect, useState } from "react";
import { authService } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (!authService.isAuthenticated()) {
      router.push("/signin");
      return;
    }
    setUser(authService.getUser());
  }, [router]);

  const handleLogout = async () => {
    await authService.logout();
    router.push("/signin");
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[#022C4F]">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded">
              <h2 className="font-semibold mb-2">User Information</h2>
              <p><strong>Name:</strong> {user.fullname}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h2 className="font-semibold mb-2">Quick Actions</h2>
              <div className="space-y-2">
                <button className="w-full bg-[#022C4F] text-white py-2 rounded">
                  View Projects
                </button>
                <button className="w-full bg-[#022C4F] text-white py-2 rounded">
                  Manage Team
                </button>
                <button className="w-full bg-[#022C4F] text-white py-2 rounded">
                  Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}