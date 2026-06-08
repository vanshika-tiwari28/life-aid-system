"use client";

import { motion } from "framer-motion";

/*
  SERVICES PAGE PURPOSE
  ---------------------
  This page explains:
  - What Life Save Aid does
  - How each service helps save lives
  - Who can use the platform

  NOTE:
  No cards here (cards are only on Home for quick actions)
*/

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-red-600">
          How Life Save Aid Helps
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          A simple, fast, and reliable emergency response system.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="space-y-14">

        {/* BLOOD DONATION */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl shadow p-8"
        >
          <h2 className="text-2xl font-bold mb-4">🩸 Blood Donation Support</h2>
          <p className="text-gray-700">
            When a patient urgently needs blood, Life Save Aid connects them
            with nearby registered donors based on blood group and location.
          </p>

          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Patients submit a blood request</li>
            <li>• Nearby donors are notified instantly</li>
            <li>• Faster response, fewer delays</li>
          </ul>
        </motion.div>

        {/* HOSPITALS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl shadow p-8"
        >
          <h2 className="text-2xl font-bold mb-4">🏥 Hospital Connectivity</h2>
          <p className="text-gray-700">
            Users can quickly locate nearby hospitals with emergency facilities,
            reducing time spent searching during critical moments.
          </p>

          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Nearest hospitals shown</li>
            <li>• Emergency contact information</li>
            <li>• Easy navigation support</li>
          </ul>
        </motion.div>

        {/* SOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow p-8"
        >
          <h2 className="text-2xl font-bold mb-4">🚨 SOS Emergency Alerts</h2>
          <p className="text-gray-700">
            In life-threatening situations, users can trigger an SOS alert
            that notifies volunteers, hospitals, and emergency contacts.
          </p>

          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• One-tap SOS activation</li>
            <li>• Live location sharing</li>
            <li>• Immediate emergency response</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}