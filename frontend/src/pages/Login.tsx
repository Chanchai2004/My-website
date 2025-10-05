'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Mail, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { LoginLoader, FullScreenLoader } from '../components/LottieLoader';
import apiService from '../services/api';
import { IUser } from '../interfaces/IUSER';

export default function Login() {
  const [formData, setFormData] = useState<IUser>({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate initial page loading
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await apiService.Login(formData);
      
      // เก็บข้อมูลลง localStorage และ cookies
      localStorage.setItem('token', response.Token);
      localStorage.setItem('user', JSON.stringify({
        id: response.ID,
        firstName: response.FirstName,
        lastName: response.LastName,
        email: response.Email,
        role: response.Role,
        roleId: response.RoleID
      }));
      localStorage.setItem('role', response.Role);
      localStorage.setItem('isLogin', 'true');

      // เก็บข้อมูลใน cookies สำหรับ middleware
      document.cookie = `isLogin=true; path=/; max-age=86400`; // 24 hours
      document.cookie = `role=${response.Role}; path=/; max-age=86400`;
      document.cookie = `token=${response.Token}; path=/; max-age=86400`;

      // Navigate ไปหน้า Home
      router.push('/');
      
    } catch (error: unknown) {
      console.error('Login error:', error);
      const axiosError = error as { response?: { data?: { Error?: string } } };
      setError(axiosError?.response?.data?.Error || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Show page loader on initial load
  if (pageLoading) {
    return <FullScreenLoader />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--gradient-bg)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-md w-full space-y-8">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 relative mb-6">
            <Image
              src="/logo.png"
              alt="Chanchai Lertsri Logo"
              fill
              className="rounded-full shadow-lg"
            />
          </div>
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-2">
            Welcome Back
          </h2>
          <p className="text-[var(--muted-foreground)]">
            Sign in to your account to continue
          </p>
        </div>
        
        {/* Login Form */}
        <div className="bg-[var(--card)] rounded-2xl shadow-xl border border-[var(--border)] p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 bg-[var(--input)] border border-[var(--input-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[var(--muted-foreground)]" />
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-[var(--foreground)]">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="w-full px-4 py-3 bg-[var(--input)] border border-[var(--input-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)] focus:border-transparent transition-all duration-200 pr-12"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-[var(--error)]/10 border border-[var(--error)]/20 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-[var(--error)] mr-2" />
                  <span className="text-sm text-[var(--error)] font-medium">{error}</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-[var(--gradient-primary)] text-[var(--primary-foreground)] font-semibold rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <LoginLoader className="mr-2" />
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Test Accounts */}
          <div className="mt-8 pt-6 border-t border-[var(--border)]">
            <div className="text-center">
              <p className="text-sm font-medium text-[var(--foreground)] mb-3">
                Test Accounts
              </p>
              <div className="grid grid-cols-1 gap-3 text-xs">
                <div className="bg-[var(--muted)] rounded-lg p-3">
                  <div className="font-medium text-[var(--foreground)] mb-1">Admin Account</div>
                  <div className="text-[var(--muted-foreground)]">
                    <div>Email: admin@gmail.com</div>
                    <div>Password: 123456</div>
                  </div>
                </div>
                <div className="bg-[var(--muted)] rounded-lg p-3">
                  <div className="font-medium text-[var(--foreground)] mb-1">Guest Account</div>
                  <div className="text-[var(--muted-foreground)]">
                    <div>Email: guest@gmail.com</div>
                    <div>Password: 123456</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
