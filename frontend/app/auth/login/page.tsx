"use client"

import dynamic from 'next/dynamic';

// Dynamically import the LoginForm component with SSR disabled
const LoginForm = dynamic(
  () => import('@/components/auth/LoginForm'),
  { ssr: false }
);

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;