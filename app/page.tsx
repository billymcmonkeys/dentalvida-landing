import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DentalHealth from "@/components/DentalHealth";
import AppointmentCalendar from "@/components/AppointmentCalendar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <DentalHealth />
        <AppointmentCalendar />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
