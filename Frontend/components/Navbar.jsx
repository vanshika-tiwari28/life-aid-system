"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg rounded-xl mx-6 mt-6 px-6 py-4 flex justify-between items-center relative z-50">

      {/* 🔴 LOGO */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/heart-rate.png"
          alt="Life Save Aid Logo"
          width={40}
          height={40}
        />
        <span className="text-red-600 font-extrabold text-2xl tracking-wider">
          Life Save Aid
        </span>
      </div>


      {/* 🔴 DESKTOP LINKS */}
      <ul className="hidden md:flex gap-6 font-semibold">
        {["home", "services", "contact"].map((link) => (
          <li key={link} className="relative group">
            <Link
              href={`/${link === "home" ? "" : link}`}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>

            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all"></span>
          </li>
        ))}
      </ul>


      {/* 🔴 RIGHT SIDE */}
      <div className="flex items-center gap-3 relative">

        {/* 🚨 EMERGENCY */}
        <Link href="/emergency" className="hidden md:block">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow">
            Emergency
          </button>
        </Link>


        {/* 👤 PROFILE ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="border rounded-full p-2 hover:bg-gray-100"
        >
          <User size={20} />
        </button>


        {/* 🔽 DROPDOWN */}
        {open && (
          <div className="absolute right-0 top-12 w-40 bg-white shadow-lg rounded-lg py-2">

            <Link
              href="/login"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>

            <Link
              href="/register"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Register
            </Link>

          </div>
        )}

      </div>

    </nav>
  );
}