"use client";

import Image from "next/image";
import { Button } from "./button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter(); // Next.js router for navigation

  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-red-400 via-red-300 to-red-100 rounded-xl mx-6 mt-6 overflow-hidden shadow-lg"
    >
      {/* Background animated blobs */}
      <motion.div 
        className="absolute top-0 -left-10 w-64 h-64 bg-red-200 rounded-full blur-3xl opacity-50 pointer-events-none"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="absolute bottom-0 -right-10 w-72 h-72 bg-red-300 rounded-full blur-3xl opacity-40 pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-16 py-16">
        
        {/* TEXT CONTENT */}
        <motion.div 
          className="z-10 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Saving Lives When <br /> Every Second Matters
          </h1>

          <motion.p 
            className="mt-4 text-lg text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Connecting blood donors, hospitals, and SOS support instantly.
          </motion.p>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            
            {/* GET HELP → navigates to /get-help page */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => router.push("/get-help")}
                className="bg-red-600 hover:bg-red-700"
              >
                Get Help
              </Button>
            </motion.div>

            {/* VOLUNTEER → navigates to /volunteer page */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => router.push("/volunteer")}
                className="bg-red-600 hover:bg-red-700"
              >
                Volunteer
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div 
          className="relative h-[300px] md:h-[400px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/images/Medical care.png"
            alt="Hero Illustration"
            fill
            className="object-contain pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}