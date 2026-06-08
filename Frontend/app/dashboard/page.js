"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch("http://localhost:3001/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data.user));

  }, []);

  if (!user) return <p className="p-10">Loading...</p>;

  return (

    <div className="min-h-screen bg-gray-50">

      {/* 🔴 HEADER */}
      <div className="bg-white shadow px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">Dashboard</h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/login");
          }}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>


      {/* 🔴 CONTENT */}
      <div className="p-8">

        {/* Welcome Card */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Welcome, {user.name} 👋
          </h2>
          <p className="text-gray-600">
            Manage your emergency services from here.
          </p>
        </div>


        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">Blood Requests</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">12</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">Hospitals</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">8</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">SOS Alerts</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">3</p>
          </div>

        </div>


        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow p-6">

          <h3 className="text-xl font-bold mb-4">Quick Actions</h3>

          <div className="flex flex-wrap gap-4">

            <button
              onClick={() => router.push("/")}
              className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
            >
              Go to Homepage
            </button>

            <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">
              Request Blood
            </button>

            <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">
              Emergency SOS
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}