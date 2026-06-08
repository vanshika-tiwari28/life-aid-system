"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "./card";
import { Button } from "./button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; // ✅ Import Link

export default function EmergencyServices() {
  const services = [
    { title: "Find Blood Donor", image: "/images/blood.png", path: "/blood-donor" },
    { title: "Nearby Hospitals", image: "/images/hospital.png", path: "/hospitals" },
    { title: "SOS Alert", image: "/images/sos.png", path: "/sos-alert" },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50 relative overflow-hidden">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-red-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Emergency Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, idx) => (
          <Service
            key={idx}
            title={service.title}
            image={service.image}
            path={service.path} // ✅ new prop
            delay={idx * 0.2}
          />
        ))}
      </div>
    </section>
  );
}

function Service({ title, image, path, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, delay }}
      className="cursor-pointer relative"
    >
      {/* ✅ Wrap the Card with Link */}
      <Link href={path}>
        <Card className="text-center shadow-md hover:shadow-xl transition-transform duration-300 relative overflow-hidden">
          {/* Red pulsing bubble only for SOS */}
          {title === "SOS Alert" && (
            <motion.div
              className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
          )}

          <CardHeader className="flex flex-col items-center gap-4">
            <Image
              src={image}
              alt={title}
              width={90}
              height={90}
              className="pointer-events-none"
            />
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          </CardHeader>

          <CardContent>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="w-full"
                variant="destructive"
                // ✅ Remove the alert because navigation happens on Link click
              >
                Go
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
