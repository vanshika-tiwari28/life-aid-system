"use client";

import { useState } from "react";

/*
  PURPOSE:
  This page allows users to register as volunteers.
  They can help with blood donation, emergency response, etc.
*/

export default function VolunteerPage() {
  const [volunteer, setVolunteer] = useState({
    name: "",
    phone: "",
    bloodGroup: "",
    city: "",
    availability: "",
  });

  const handleChange = (e) => {
    setVolunteer({
      ...volunteer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!volunteer.name || !volunteer.phone) {
      alert("Name and Phone are required");
      return;
    }

    console.log("VOLUNTEER DATA:", volunteer);

    alert("Thank you for registering as a volunteer!");

    setVolunteer({
      name: "",
      phone: "",
      bloodGroup: "",
      city: "",
      availability: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Become a Volunteer
      </h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          value={volunteer.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={volunteer.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="bloodGroup"
          placeholder="Blood Group"
          value={volunteer.bloodGroup}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="city"
          placeholder="City"
          value={volunteer.city}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="availability"
          placeholder="Availability (24/7, weekends, etc.)"
          value={volunteer.availability}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-3 rounded-full w-full"
        >
          Register as Volunteer
        </button>
      </form>
    </div>
  );
}