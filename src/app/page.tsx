import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
 <div>
  <Navbar />
  <HeroSection />
  <CardSection />
  <Footer />
 </div>
  );
}
