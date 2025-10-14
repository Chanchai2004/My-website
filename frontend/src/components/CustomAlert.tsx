'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import successAnimation from '../assets/Success animation.json';

interface CustomAlertProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
  duration?: number; // Auto close duration in milliseconds
}

export default function CustomAlert({
  isOpen,
  onClose,
  type,
  title,
  message,
  duration = 3000
}: CustomAlertProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      
      // Auto close after duration
      if (duration > 0) {
        const timer = setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onClose();
          }, 300);
        }, duration);
        
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, duration, onClose]);


  const getIcon = () => {
    // ใช้ Lottie animation สำหรับทุกประเภท
    return (
      <div className="w-full h-full">
        <Lottie 
          animationData={successAnimation}
          loop={false}
          autoplay={true}
        />
      </div>
    );
  };

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          container: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800',
          icon: 'text-green-600 dark:text-green-400',
          title: 'text-green-800 dark:text-green-200',
          message: 'text-green-700 dark:text-green-300'
        };
      case 'error':
        return {
          container: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800',
          icon: 'text-red-600 dark:text-red-400',
          title: 'text-red-800 dark:text-red-200',
          message: 'text-red-700 dark:text-red-300'
        };
      default:
        return {
          container: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
          icon: 'text-blue-600 dark:text-blue-400',
          title: 'text-blue-800 dark:text-blue-200',
          message: 'text-blue-700 dark:text-blue-300'
        };
    }
  };

  const styles = getTypeStyles();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Simple Animation and Text Only */}
      <div 
        className={`flex flex-col items-center justify-center transform transition-all duration-300 ${
          isVisible 
            ? 'translate-y-0 scale-100 opacity-100' 
            : 'translate-y-4 scale-95 opacity-0'
        }`}
      >
        {/* Lottie Animation */}
        <div className="w-1/2 h-auto mb-4">
          {getIcon()}
        </div>
        
        {/* Text Message */}
        <div className="text-center">
          <h3 className={`text-xl font-semibold ${styles.title} mb-2`}>
            {title}
          </h3>
          <p className={`text-base ${styles.message}`}>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
