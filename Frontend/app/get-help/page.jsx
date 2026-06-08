"use client";

import { useState } from "react";

/*
  PURPOSE:
  This page is for users who need emergency help.
  Example: blood requirement, accident, medical emergency
*/

export default function GetHelpPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bloodGroup: "",
    location: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // BASIC VALIDATION
    if (!formData.name || !formData.phone) {
      alert("Name and Phone are required");
      return;
    }

    console.log("GET HELP REQUEST:", formData);

    alert("Your help request has been submitted!");

    // Clear form
    setFormData({
      name: "",
      phone: "",
      bloodGroup: "",
      location: "",
      message: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Get Emergency Help
      </h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="bloodGroup"
          placeholder="Blood Group (optional)"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="message"
          placeholder="Describe emergency"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-3 rounded-full w-full"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}