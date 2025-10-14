'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieLoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  className?: string;
  animationData?: unknown;
  loop?: boolean;
  autoplay?: boolean;
}

export function LottieLoader({ 
  size = 'xl', 
  className = '', 
  animationData,
  loop = true,
  autoplay = true 
}: LottieLoaderProps) {
  const [animation, setAnimation] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Load animation data from JSON file
    const loadAnimation = async () => {
      try {
        const response = await fetch('/chatbot-loader.json');
        if (!response.ok) {
          throw new Error('Failed to load animation');
        }
        const data = await response.json();
        setAnimation(data);
        setLoading(false);
      } catch (err) {
        console.error('Error loading Lottie animation:', err);
        setError(true);
        setLoading(false);
      }
    };

    if (!animationData) {
      loadAnimation();
    } else {
      setAnimation(animationData);
      setLoading(false);
    }
  }, [animationData]);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
    '2xl': 'w-64 h-64',
    '3xl': 'w-80 h-80',
    '4xl': 'w-96 h-96',
    '5xl': 'w-[28rem] h-[28rem]',
    '6xl': 'w-[32rem] h-[32rem]'
  };

  if (loading) {
    return (
      <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary)]"></div>
      </div>
    );
  }

  if (error || !animation) {
    return (
      <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary)]"></div>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Lottie
        animationData={animation}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

// Specialized loader components for different use cases
export function LoginLoader({ className = '' }: { className?: string }) {
  return (
    <LottieLoader 
      size="lg" 
      className={className}
      loop={true}
      autoplay={true}
    />
  );
}

export function ButtonLoader({ className = '' }: { className?: string }) {
  return (
    <LottieLoader 
      size="sm" 
      className={className}
      loop={true}
      autoplay={true}
    />
  );
}

export function FullScreenLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center bg-[var(--background)]/98 backdrop-blur-md ${className}`}>
      <div className="text-center">
        <LottieLoader 
          size="6xl" 
          className="mx-auto mb-8"
          loop={true}
          autoplay={true}
        />
        <p className="text-[var(--foreground)] text-2xl font-semibold mb-2">
          Loading...
        </p>
        <p className="text-[var(--muted-foreground)] text-base">
          Please wait while we prepare everything for you
        </p>
      </div>
    </div>
  );
}

export function PageLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center bg-[var(--background)]/95 backdrop-blur-sm ${className}`}>
      <div className="text-center">
        <LottieLoader 
          size="5xl" 
          className="mx-auto mb-6"
          loop={true}
          autoplay={true}
        />
        <p className="text-[var(--muted-foreground)] text-xl font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}
