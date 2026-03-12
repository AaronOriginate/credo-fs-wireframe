import Navigation from "@/components/Navigation";
import PageHeader from "@/components/contact/PageHeader";
import ContactMethods from "@/components/contact/ContactMethods";
import ContactForm from "@/components/contact/ContactForm";
import OtherWays from "@/components/contact/OtherWays";
import Reassurance from "@/components/contact/Reassurance";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader />
        <ContactMethods />
        <ContactForm />
        <OtherWays />
        <Reassurance />
      </main>
      <Footer />
    </>
  );
}
