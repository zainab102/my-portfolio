"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [adminUsername, setAdminUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login");
      return;
    }

    try {
      const decoded = jwt_decode(token);
      const now = Date.now() / 1000;

      if (decoded.exp < now) {
        localStorage.removeItem("token");
        router.push("/admin/login");
        return;
      }

      setAdminUsername(decoded.username);
      setLoading(false);
    } catch (err) {
      console.error("Invalid token:", err);
      localStorage.removeItem("token");
      router.push("/admin/login");
    }
  }, [router]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 text-lg">Loading Dashboard...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome, {adminUsername}!
        </h1>
        <p className="text-gray-600 mb-6">
          This is your secure admin dashboard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Manage Posts</h2>
            <p>Create, edit, or delete blog posts.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">View Analytics</h2>
            <p>Check website traffic and user engagement.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">User Management</h2>
            <p>Manage users and permissions.</p>
          </div>
          <div className="bg-red-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Settings</h2>
            <p>Update dashboard preferences and security.</p>
          </div>
        </div>

        <button
          className="mt-8 bg-red-600 text-white py-3 px-6 rounded-xl hover:bg-red-700 transition"
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/admin/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
