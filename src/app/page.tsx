import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustPilotStrip from "@/components/TrustPilotStrip";
import ProblemValidation from "@/components/ProblemValidation";
import TheAlternative from "@/components/TheAlternative";
import HowItWorks from "@/components/HowItWorks";
import TwoPaths from "@/components/TwoPaths";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustPilotStrip />
        <ProblemValidation />
        <TheAlternative />
        <HowItWorks />
        <TwoPaths />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
