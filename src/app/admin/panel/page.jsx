"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  if (!authenticated) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      {/* Your admin panel content here */}
      <p>Welcome, Admin! You can manage blogs and comments here.</p>
    </div>
  );
}
