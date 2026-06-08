"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BloodDonorPage() {

  /* ✅ FORM STATE */
  const [form, setForm] = useState({
    bloodGroup: "",
    city: "",
  });

  /* ✅ RESULT STATE */
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ✅ INPUT CHANGE */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ✅ SEARCH FUNCTION */
    const handleSearch = async () => {
  if (!form.bloodGroup || !form.city) {
    alert("Please select blood group and city");
    return;
  }

  try {
    setLoading(true);

    const url = `http://localhost:3001/api/donor/search?bloodGroup=${encodeURIComponent(
      form.bloodGroup
    )}&city=${encodeURIComponent(form.city)}`;

    console.log("FETCHING:", url); // 🔥 debug

    const res = await fetch(url);

    console.log("STATUS:", res.status); // 🔥 debug

    if (!res.ok) {
      throw new Error("Server error");
    }

    const data = await res.json();

    console.log("DATA:", data);

    if (data.length > 0) {
      setDonors(data);
    } else {
      setDonors([]);
      alert("Donor not found");
    }

  } catch (error) {
    console.log("FULL ERROR:", error);
    alert("Error fetching donors");
  } finally {
    setLoading(false);
  }
};
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-red-500 to-red-300 text-white py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Find Blood Donors Near You
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Connect with nearby blood donors instantly and save lives.
          </p>
        </motion.div>
      </section>

      {/* SEARCH */}
      <section className="py-16 px-6 bg-red-50">
        <motion.div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-xl rounded-2xl">

            <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
              Search for Blood Donors
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Blood Group */}
              <select
                name="bloodGroup"
                value={form.bloodGroup}
                onChange={handleChange}
                className="border rounded-lg p-3"
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

              {/* City */}
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                value={form.city}
                onChange={handleChange}
                className="border rounded-lg p-3"
              />
            </div>

            <div className="mt-8 text-center">
              <Button
                onClick={handleSearch}
                className="bg-red-600 hover:bg-red-700 px-10 py-3 rounded-full"
              >
                Search Donors
              </Button>
            </div>

          </Card>
        </motion.div>
      </section>

      {/* RESULTS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Available Donors
          </h2>

          {loading && (
            <p className="text-center text-gray-500">Loading...</p>
          )}

          {!loading && donors.length === 0 && (
            <p className="text-center text-gray-500">
              No donors found. Try another search.
            </p>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            {donors.map((d, i) => (
              <Card key={i} className="p-5 shadow-lg rounded-xl">
                <h3 className="text-lg font-bold text-red-600">{d.name}</h3>
                <p>Email: {d.email || "N/A"}</p>
                <p>Phone: {d.phone || "N/A"}</p>
                <p>Blood: {d.bloodGroup}</p>
                <p>City: {d.city || "N/A"}</p>
              </Card>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}