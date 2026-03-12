import Navigation from "@/components/Navigation";
import Opening from "@/components/reviews/Opening";
import TrustPilotSummary from "@/components/reviews/TrustPilotSummary";
import FeaturedReviews from "@/components/reviews/FeaturedReviews";
import WhatKeepsComingUp from "@/components/reviews/WhatKeepsComingUp";
import ReviewsCTA from "@/components/reviews/ReviewsCTA";
import Footer from "@/components/Footer";

export default function ReviewsPage() {
  return (
    <>
      <Navigation />
      <main>
        <Opening />
        <TrustPilotSummary />
        <FeaturedReviews />
        <WhatKeepsComingUp />
        <ReviewsCTA />
      </main>
      <Footer />
    </>
  );
}
