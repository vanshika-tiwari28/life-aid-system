"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function EmergencyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);

  const [form, setForm] = useState({
    name: "",
    location: "",
    requestType: "",
    bloodGroup: "",
    emergencyService: "",
    priority: "",
    details: "",
  });

  /* Auto Location */
  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = `Lat: ${position.coords.latitude.toFixed(
          4
        )}, Lng: ${position.coords.longitude.toFixed(4)}`;
        setForm({ ...form, location: coords });
        setLoadingLocation(false);
      },
      () => {
        alert("Unable to fetch location");
        setLoadingLocation(false);
      }
    );
  };

  /* Submit */
 const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("📤 Sending:", form);

  try {
    const res = await fetch("http://localhost:3001/api/emergency", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("✅ Response:", data);

    if (data.success) {
      setSubmitted(true);
    } else {
      alert("Something went wrong");
    }

  } catch (error) {
    console.error("❌ Error:", error);
    alert("Server error");
  }
};

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-red-100 text-red-800 py-16 text-center px-6 mt-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Emergency Services
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Immediate assistance for medical emergencies. Submit a request and
          get help quickly.
        </p>

        <a
          href="tel:108"
          className="inline-block mt-6 bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Call Now: 108
        </a>
      </section>

      {/* FORM */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-3xl mx-auto bg-red-50 p-8 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
            Create Emergency Request
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div>
                <label className="font-semibold block mb-2">Name</label>
                <input
                  required
                  className="w-full p-3 border rounded-lg"
                  placeholder="Full name"
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="font-semibold block mb-2">Location</label>
                <div className="flex gap-2">
                  <input
                    required
                    className="flex-1 p-3 border rounded-lg"
                    placeholder="Enter or auto-detect location"
                    value={form.location}
                    onChange={(e) =>
                      setForm({ ...form, location: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    onClick={detectLocation}
                    className="px-4 bg-gray-200 rounded-lg text-sm"
                  >
                    {loadingLocation ? "Detecting..." : "📍 Auto"}
                  </button>
                </div>
              </div>

              {/* REQUEST TYPE */}
              <div>
                <label className="font-semibold block mb-2">
                  Request Type
                </label>
                <select
                  required
                  className="w-full p-3 border rounded-lg"
                  onChange={(e) =>
                    setForm({ ...form, requestType: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option>Blood</option>
                  <option>Medicine</option>
                  <option>Medical Equipment</option>
                  <option>Ambulance</option>
                </select>
              </div>

              {/* BLOOD GROUP (CONDITIONAL) */}
              {form.requestType === "Blood" && (
                <div>
                  <label className="font-semibold block mb-2">
                    Blood Group
                  </label>
                  <select
                    required
                    className="w-full p-3 border rounded-lg"
                    onChange={(e) =>
                      setForm({ ...form, bloodGroup: e.target.value })
                    }
                  >
                    <option value="">Select blood group</option>
                    {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                      (bg) => (
                        <option key={bg}>{bg}</option>
                      )
                    )}
                  </select>
                </div>
              )}

              {/* PRIORITY */}
              <div>
                <label className="font-semibold block mb-2">
                  Emergency Priority
                </label>
                <select
                  required
                  className="w-full p-3 border rounded-lg"
                  onChange={(e) =>
                    setForm({ ...form, priority: e.target.value })
                  }
                >
                  <option value="">Select priority</option>
                  <option>Critical</option>
                  <option>High</option>
                  <option>Normal</option>
                </select>
              </div>

              {/* SERVICE */}
              <div>
                <label className="font-semibold block mb-2">
                  Emergency Service
                </label>
                <select
                  required
                  className="w-full p-3 border rounded-lg"
                  onChange={(e) =>
                    setForm({ ...form, emergencyService: e.target.value })
                  }
                >
                  <option value="">Select service</option>
                  <option>Hospital Emergency</option>
                  <option>Blood Bank</option>
                  <option>Pharmacy</option>
                  <option>Ambulance Service</option>
                </select>
              </div>

              {/* DETAILS */}
              <div>
                <label className="font-semibold block mb-2">
                  Additional Details
                </label>
                <textarea
                  rows="4"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Describe the emergency"
                  onChange={(e) =>
                    setForm({ ...form, details: e.target.value })
                  }
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition"
              >
                Submit Emergency Request
              </button>
            </form>
          ) : (
            /* SUCCESS */
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-green-600">
                Request Submitted Successfully
              </h3>
              <p className="text-gray-700">
                Emergency services have been notified based on your priority.
              </p>
              <a
                href="tel:108"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold"
              >
                Call Emergency: 108
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}