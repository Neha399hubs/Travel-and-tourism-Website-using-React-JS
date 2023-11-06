import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Trip from "../components/trip";
import AboutImg from "../pics/10-reasons-to-visit-Kerala-Kumarakom-Back-Waters-Boat-House-1400x550-c-default.jpg";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Our Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
