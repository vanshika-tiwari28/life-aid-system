"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isDonor, setIsDonor] = useState(false);
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role: isDonor ? "donor" : "user",
          bloodGroup,
          city,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registered successfully 🎉");
        router.push("/login");
      } else {
        alert(data.message || "Registration failed");
      }

    } catch (error) {
      alert("Server not reachable ❌");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-200">

      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-[350px]">

        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">

          {/* NAME */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded focus:outline-red-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded focus:outline-red-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded focus:outline-red-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* DONOR OPTION */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={isDonor}
              onChange={() => setIsDonor(!isDonor)}
            />
            Register as Blood Donor
          </label>

          {/* DONOR FIELDS */}
          {isDonor && (
            <>
              <select
                className="w-full border p-2 rounded"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                required
              >
                <option value="">Select Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>

              <input
                type="text"
                placeholder="City"
                className="w-full border p-2 rounded"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </>
          )}

          {/* BUTTON */}
          <button
            disabled={loading}
            className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-red-600 cursor-pointer font-semibold"
            >
              Login
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}