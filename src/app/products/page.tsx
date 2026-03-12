import Navigation from "@/components/Navigation";
import ProductsHero from "@/components/products/ProductsHero";
import IntegrationExplained from "@/components/products/IntegrationExplained";
import BrandsGrid from "@/components/products/BrandsGrid";
import Connectivity from "@/components/products/Connectivity";
import ProductsFinalCTA from "@/components/products/ProductsFinalCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Products — Credo FS",
  description:
    "The brands Andy trusts for tills, card machines, payments, and connectivity. Vendor-neutral recommendations for pubs and restaurants.",
};

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main>
        <ProductsHero />
        <IntegrationExplained />
        <BrandsGrid />
        <Connectivity />
        <ProductsFinalCTA />
      </main>
      <Footer />
    </>
  );
}
