import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_API_URL: process.env.NODE_ENV === 'development' 
      ? 'http://localhost:8000' 
      : process.env.NEXT_PUBLIC_API_URL || 'https://chanchailertsri.online/api',
  },
};

export default nextConfig;
