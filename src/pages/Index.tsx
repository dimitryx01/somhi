
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import PricingTable from "@/components/PricingTable";
import ValueProposition from "@/components/ValueProposition";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Solution />
      <Benefits />
      <PricingTable />
      <ValueProposition />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
