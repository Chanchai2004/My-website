'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Mail, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { FullScreenLoader } from '../components/LottieLoader';
import Button from '../components/Button';
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
    }, 3000);

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
    <div className="min-h-screen flex items-center justify-center py-4 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8" style={{ background: 'var(--gradient-bg)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg space-y-4 sm:space-y-6 md:space-y-8">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="mx-auto h-18 w-18 sm:h-24 sm:w-24 relative mb-4 sm:mb-6 group">
            {/* Robot Logo Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-[var(--secondary)]/20 to-[var(--accent)]/20 dark:from-[var(--primary)]/30 dark:via-[var(--secondary)]/30 dark:to-[var(--accent)]/30 rounded-full shadow-lg backdrop-blur-sm"></div>
            {/* Robot Logo */}
            <Image
              src="/robot.png"
              alt="AI Assistant Robot Logo"
              width={96}
              height={96}
              className="relative z-10 rounded-full shadow-lg object-cover transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 w-18 h-18 sm:w-24 sm:h-24"
              priority
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-1 sm:mb-2">
            Welcome Back
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] px-2">
            Sign in to your account to continue
          </p>
        </div>
        
        {/* Login Form */}
        <div className="bg-[var(--card)] rounded-xl sm:rounded-2xl shadow-xl border border-[var(--border)] p-4 sm:p-6 md:p-8">
          <form className="space-y-4 sm:space-y-5 md:space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-[var(--foreground)]">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-[var(--input)] border border-[var(--input-border)] rounded-lg text-sm sm:text-base text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--muted-foreground)]" />
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-[var(--foreground)]">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-[var(--input)] border border-[var(--input-border)] rounded-lg text-sm sm:text-base text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)] focus:border-transparent transition-all duration-200 pr-10 sm:pr-12"
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
                    <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-[var(--error)]/10 border border-[var(--error)]/20 rounded-lg p-3 sm:p-4">
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--error)] mr-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-[var(--error)] font-medium">{error}</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="dark"
              size="lg"
              isLoading={loading}
              useLottieLoader={true}
              className="w-full font-semibold text-sm sm:text-base"
            >
              Sign In
            </Button>
          </form>

          {/* Forgot Password */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[var(--border)]">
            <div className="text-center">
              <button
                type="button"
                className="text-xs sm:text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors duration-200"
                onClick={() => {
                  // TODO: Implement forgot password functionality
                  alert('Forgot password functionality coming soon!');
                }}
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
