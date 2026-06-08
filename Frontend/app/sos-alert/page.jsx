"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle, MapPin, Phone } from "lucide-react";

export default function SOSAlertPage() {
const [activated, setActivated] = useState(false);

/* ✅ SOS FUNCTION */
const sendSOS = () => {

  navigator.geolocation.getCurrentPosition(
    async (pos) => {

      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;

      try {

       const res = await fetch("http://localhost:3001/api/sos-alert", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            latitude,
            longitude
          })
        });

        const data = await res.json();
        console.log(data);

        setActivated(true);

      } catch (error) {
        console.log(error);
        alert("Failed to send SOS");
      }

    },
    (err) => {
      alert("Location error: " + err.message);
    }
  );
};
return (
<> <Navbar />


  <motion.section
    className="py-20 px-6 bg-red-50 min-h-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    {/* TITLE */}
    <motion.h1
      className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-6"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      SOS Emergency Alert
    </motion.h1>

    <motion.p
      className="text-center text-gray-700 max-w-3xl mx-auto text-lg mb-12"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      Use this feature only in real emergencies. Your alert will notify nearby
      hospitals, blood donors, and emergency responders with your location.
    </motion.p>

    {/* SOS CARD */}
    <div className="max-w-xl mx-auto relative">
      <Card className="text-center shadow-xl relative overflow-hidden">

        {!activated && (
          <motion.div
            className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full"
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        )}

        <CardHeader>
          <Image
            src="/images/sos.png"
            alt="SOS Alert"
            width={90}
            height={90}
            className="mx-auto"
          />

          <CardTitle className="mt-4">
            {activated ? "SOS Sent Successfully" : "Activate SOS"}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {!activated ? (
            <>
              <div className="text-sm text-gray-600 space-y-2">
                <p className="flex items-center justify-center gap-2">
                  <MapPin size={16} className="text-red-600" />
                  Your location will be shared
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Phone size={16} className="text-red-600" />
                  Nearby responders will be alerted
                </p>
              </div>

              <Button
                className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
                onClick={sendSOS}
              >
                Send SOS Alert
              </Button>

              <p className="text-xs text-gray-500">
                False alerts may delay help for others.
              </p>
            </>
          ) : (
            <>
              {/* SUCCESS STATE */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="space-y-4"
              >
                <p className="text-green-600 font-semibold text-lg">
                  Emergency alert has been sent
                </p>

                <p className="text-sm text-gray-600">
                  Stay calm. Help is being notified based on your location.
                </p>

                <div className="bg-red-100 p-4 rounded-lg text-sm text-red-700 flex gap-2 justify-center">
                  <AlertTriangle size={18} />
                  If the situation worsens, call emergency services immediately.
                </div>

                {/* CALL BUTTONS */}
                <div className="flex gap-3 justify-center">
                  <Button
                    onClick={() => (window.location.href = "tel:108")}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Call Ambulance
                  </Button>

                  <Button
                    onClick={() => (window.location.href = "tel:112")}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Call Emergency
                  </Button>
                </div>

                <Button variant="outline" disabled className="w-full">
                  SOS Active
                </Button>
              </motion.div>
            </>
          )}
        </CardContent>

      </Card>
    </div>
  </motion.section>

  <Footer />
</>


);
}
