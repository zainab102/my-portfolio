"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BlogsAdmin from "./BlogsAdmin";

export default function AdminPanelWrapper() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Check if user is logged in as admin
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.push("/admin/login"); // redirect to login if not authorized
    } else {
      setAuthorized(true);
    }
  }, [router]);

  // Only render the admin panel if authorized
  return authorized ? <BlogsAdmin /> : null;
}
