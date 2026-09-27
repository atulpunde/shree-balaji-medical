import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBadges from "./components/TrustBadges";
import DeliveryBanner from "./components/DeliveryBanner";
import ItemTypes from "./components/ItemTypes";
import Branches from "./components/Branches";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBadges />
      <DeliveryBanner />
      <ItemTypes />
      <Branches />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
