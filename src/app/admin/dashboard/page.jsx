'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/admin/panel');
  }, [router]);

  return <div className="p-8">Redirecting to admin panel...</div>;
}
