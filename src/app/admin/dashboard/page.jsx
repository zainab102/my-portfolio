'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dashboard() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/admin/me');
        const data = await res.json();
        
        if (data.admin) {
          setIsAdmin(true);
        } else {
          router.push('/admin/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!isAdmin) {
    return <div className="p-8">Redirecting...</div>;
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Blog Management</h2>
          <div className="space-y-2">
            <Link 
              href="/admin/panel" 
              className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
            >
              Add New Blog
            </Link>
            <Link 
              href="/blogs" 
              className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
            >
              View All Blogs
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <p className="text-gray-600">Welcome to your admin dashboard!</p>
        </div>
      </div>
    </div>
  );
}
