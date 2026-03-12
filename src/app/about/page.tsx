import Navigation from "@/components/Navigation";
import Opening from "@/components/about/Opening";
import HospitalityYears from "@/components/about/HospitalityYears";
import WhyCredoExists from "@/components/about/WhyCredoExists";
import ProofWovenIn from "@/components/about/ProofWovenIn";
import FullPicture from "@/components/about/FullPicture";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Andy — Credo FS",
  description:
    "Thirty years in hospitality, merchant services, and the Merchant Navy. Meet the person behind Credo FS.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <Opening />
        <HospitalityYears />
        <WhyCredoExists />
        <ProofWovenIn />
        <FullPicture />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
