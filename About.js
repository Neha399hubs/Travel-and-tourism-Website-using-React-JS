import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import AboutImg from "../pics/desktop-wallpaper-explore-italy-today-s-homepage-italian.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
