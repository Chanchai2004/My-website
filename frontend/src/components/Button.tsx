import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonLoader } from './LottieLoader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  useLottieLoader?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  useLottieLoader = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm border border-transparent relative overflow-hidden group';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white hover:from-[var(--primary-dark)] hover:to-[var(--primary)] focus:ring-[var(--primary)] shadow-lg hover:shadow-2xl border-[var(--primary)]/20',
    secondary: 'bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-dark)] text-white hover:from-[var(--secondary-dark)] hover:to-[var(--secondary)] focus:ring-[var(--secondary)] shadow-lg hover:shadow-2xl border-[var(--secondary)]/20',
    outline: 'border-2 border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)] hover:border-[var(--primary)] focus:ring-[var(--primary)] backdrop-blur-sm',
    gradient: 'bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] text-white hover:shadow-2xl focus:ring-[var(--primary)] shadow-lg border-[var(--primary)]/20',
    dark: 'bg-gradient-to-r from-[var(--dark-button-bg)] via-[var(--dark-button-hover)] to-[var(--dark-button-bg)] text-[var(--dark-button-text)] hover:from-[var(--dark-button-hover)] hover:via-[var(--dark-button-bg)] hover:to-[var(--dark-button-hover)] focus:ring-[var(--dark-button-focus)] shadow-lg hover:shadow-2xl border-[var(--dark-button-focus)]/20',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2.4s_ease-out_infinite] transform translate-x-[-100%] group-hover:translate-x-[100%] transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        {isLoading ? (
          <>
            {useLottieLoader ? (
              <ButtonLoader className="mr-3" />
            ) : (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
            )}
            <span className="font-medium">Loading...</span>
          </>
        ) : (
          children
        )}
      </div>
    </button>
  );
}
