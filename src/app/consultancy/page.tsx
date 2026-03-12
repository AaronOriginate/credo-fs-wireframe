import Navigation from "@/components/Navigation";
import Opening from "@/components/consultancy/Opening";
import ThePattern from "@/components/consultancy/ThePattern";
import WhatIndependentMeans from "@/components/consultancy/WhatIndependentMeans";
import WhatYouGet from "@/components/consultancy/WhatYouGet";
import Proof from "@/components/consultancy/Proof";
import WhoThisIsFor from "@/components/consultancy/WhoThisIsFor";
import ConsultancyCTA from "@/components/consultancy/ConsultancyCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Consultancy — Credo FS",
  description:
    "Independent advice on card machines and tills for pubs, restaurants, and hospitality businesses. Free initial conversation.",
};

export default function ConsultancyPage() {
  return (
    <>
      <Navigation />
      <main>
        <Opening />
        <ThePattern />
        <WhatIndependentMeans />
        <WhatYouGet />
        <Proof />
        <WhoThisIsFor />
        <ConsultancyCTA />
      </main>
      <Footer />
    </>
  );
}
