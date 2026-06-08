"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 py-12 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* About Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-red-600 mb-4">Life Save Aid</h3>
          <p className="text-gray-600 text-sm">
            24/7 emergency medical services with quick response and professional care. Your safety is our priority.
          </p>

          {/* Social Media */}
          <div className="flex gap-3 mt-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2, color: "#dc2626" }}
                className="text-gray-600 transition-colors duration-300"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-red-600 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-red-600 font-medium transition-transform duration-300 hover:translate-x-1">Home</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-600 font-medium transition-transform duration-300 hover:translate-x-1">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-600 font-medium transition-transform duration-300 hover:translate-x-1">Contact</Link>
            </li>
            <li>
              <Link href="/emergency" className="hover:text-red-600 font-medium transition-transform duration-300 hover:translate-x-1">Emergency</Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-red-600 mb-4">Contact Us</h3>
          <p className="text-sm text-gray-600 mb-1">📞 Phone: 108</p>
          <p className="text-sm text-gray-600 mb-1">✉️ Email: support@lifesaveaid.com</p>
          <p className="text-sm text-gray-600">📍 Address: 123 Life Save Aid Street, Bhimtal</p>
        </motion.div>

      </div>

      {/* Bottom */}
      <motion.div
        className="mt-10 border-t border-gray-300 pt-4 text-center text-gray-500 text-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        &copy; {new Date().getFullYear()} Life Save Aid. All rights reserved.
      </motion.div>
    </footer>
  );
}
