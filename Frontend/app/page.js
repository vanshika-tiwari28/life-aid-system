import Navbar from "@/components/Navbar";
import Hero from "@/components/ui/Hero";
import EmergencyServices from "@/components/ui/EmergencyServices";
import Footer from "@/components/ui/Footer";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <EmergencyServices />
      <Footer/>
    </>
  );
}
