"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin/panel");
    } else {
      setError(data.error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded space-y-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 rounded border"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded border"
          required
        />
        <button className="w-full px-4 py-2 bg-[var(--color-primary)] text-black rounded">
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
