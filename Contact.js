import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import AboutImg from "../pics/pexels-photo-1371360.jpeg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
