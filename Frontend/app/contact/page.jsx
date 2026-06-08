"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/*
  CONTACT PAGE PURPOSE
  --------------------
  This page is for:
  - General queries
  - Partnerships
  - Support issues

  IMPORTANT:
  This is NOT for emergencies.
  Emergency actions are handled via SOS / Get Help.
*/

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    console.log("CONTACT FORM DATA:", form);
    alert("Your message has been sent. We’ll get back to you soon.");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* PAGE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-red-600">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          We’re here to help, support, and collaborate.
        </p>
      </motion.div>

      {/* CONTENT GRID */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT: CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">🚨 Emergency</h2>
            <p className="text-gray-700">
              If this is a life-threatening emergency, do NOT use this form.
            </p>
            <p className="mt-2 font-semibold text-red-600">
              Use SOS or call emergency services immediately.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">📞 Support</h2>
            <p className="text-gray-700">
              Email: support@lifesaveaid.com
            </p>
            <p className="text-gray-700">
              Phone: +91 9XXXXXXXXX
            </p>
            <p className="text-gray-700">
              Availability: 9 AM – 6 PM
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">📍 Location</h2>
            <p className="text-gray-700">
              Life Save Aid <br />
              Bhimtal, Uttarakhand <br />
              India
            </p>
          </div>
        </motion.div>

        {/* RIGHT: CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white shadow rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded p-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded p-3"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded p-3"
            />

            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 w-full"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}