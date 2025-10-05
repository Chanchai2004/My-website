'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  roleId: string;
}

export default function Home() {
  const [user, setUser] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    // ตรวจสอบการ login
    const isLogin = localStorage.getItem('isLogin');
    if (!isLogin || isLogin !== 'true') {
      router.push('/login');
      return;
    }

    // ดึงข้อมูล user จาก localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [router]);

  const handleLogout = () => {
    // ลบข้อมูลจาก localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('isLogin');
    
    // ลบ cookies
    document.cookie = 'isLogin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    
    // Navigate ไปหน้า login
    router.push('/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.firstName}!</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to Your Dashboard
              </h2>
              
              {/* User Info Card */}
              <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">User Information</h3>
                <div className="space-y-2 text-left">
                  <p><span className="font-medium">Name:</span> {user.firstName} {user.lastName}</p>
                  <p><span className="font-medium">Email:</span> {user.email}</p>
                  <p><span className="font-medium">Role:</span> 
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === 'Admin' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {user.role}
                    </span>
                  </p>
                </div>
              </div>

              {/* Role-based Content */}
              {user.role === 'Admin' ? (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-red-800 mb-2">Admin Panel</h4>
                  <p className="text-red-700">You have administrative privileges. You can manage users and system settings.</p>
                </div>
              ) : (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Guest Access</h4>
                  <p className="text-blue-700">You have guest access. You can view content and manage your profile.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
