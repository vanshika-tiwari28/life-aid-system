"use client";

import { useState } from "react";
import Link from "next/link"; // ✅ for clickable name
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Hospital, AlertCircle } from "lucide-react";

export default function HospitalsPage() {
  /* ✅ STATE */
  const [area, setArea] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [searched, setSearched] = useState(false);

  /* ✅ SEARCH FUNCTION */
  const handleSearch = async () => {
    try {
      if (!area.trim()) return;

      const res = await fetch(
        `http://localhost:3001/api/hospitals/search?area=${area}`
      );

      const data = await res.json();

      setHospitals(data);
      setSearched(true);

    } catch (err) {
      console.log("Search error:", err);
    }
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-red-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Nearby Hospitals
        </h1>
        <p className="mt-3 text-lg opacity-90">
          Find hospitals and emergency medical services around you
        </p>
      </section>

      {/* SEARCH UI */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
            Search Hospitals
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Enter city (e.g. Haldwani, Nainital)"
              className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <Button
              onClick={handleSearch}
              className="bg-red-600 hover:bg-red-700 px-8"
            >
              Search
            </Button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            Search hospitals by city
          </p>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          {/* ✅ BEFORE SEARCH */}
          {!searched && (
            <p className="text-center col-span-3 text-gray-500">
              Please search hospitals by city
            </p>
          )}

          {/* ✅ AFTER SEARCH BUT EMPTY */}
          {searched && hospitals.length === 0 && (
            <p className="text-center col-span-3 text-gray-500">
              No hospitals found
            </p>
          )}

      {hospitals.map((h) => {
  const hospitalId = h._id || h.id;

  return (
    <Card key={hospitalId} className="p-6 hover:shadow-lg">

      <Hospital className="text-red-600 mb-3" size={32} />

      <h3 className="font-bold text-lg">
        {h.name}
      </h3>

      <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
        <MapPin size={14} /> {h.city}, {h.state}
      </p>

      <p className="mt-2 text-sm">
        Emergency:{" "}
        <span className="text-green-600 font-semibold">
          {h.emergency ? "Available" : "Not Available"}
        </span>
      </p>

      {/* DETAILS BUTTON */}
      <Link href={`/hospitals/${hospitalId}`}>
        <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
          View Details
        </Button>
      </Link>

    </Card>
  );
})}
        </div>
      </section>

      {/* EMERGENCY NOTICE */}
      <section className="bg-red-100 py-6 text-center">
        <p className="text-red-700 font-semibold flex justify-center items-center gap-2">
          <AlertCircle size={18} />
          In case of a life-threatening emergency, contact local emergency services immediately.
        </p>
      </section>

      <Footer />
    </>
  );
}