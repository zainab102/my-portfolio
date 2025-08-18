"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [adminEmail, setAdminEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login");
      return;
    }

    try {
      const decoded = jwt_decode(token);
      setAdminEmail(decoded.email);
      setLoading(false);
    } catch (error) {
      console.error("Invalid token", error);
      localStorage.removeItem("token");
      router.push("/admin/login");
    }
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome, {adminEmail}!</h1>
      <p>This is the protected Admin Dashboard.</p>
      <button
        className="mt-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        onClick={() => {
          localStorage.removeItem("token");
          router.push("/admin/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
