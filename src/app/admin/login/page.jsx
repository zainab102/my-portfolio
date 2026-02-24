'use client';

import Link from 'next/link';

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Admin Login</h1>
        <p className="text-gray-600 mb-6">
          Admin interface is temporarily under maintenance after framework security updates.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-3 rounded-lg font-semibold bg-gray-900 text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

