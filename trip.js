import "./tripStyles.css";
import TripData from "./tripData";
import T1 from "../pics/10-reasons-to-visit-Kerala-Kumarakom-Back-Waters-Boat-House-1400x550-c-default.jpg";
import T2 from "../pics/hot-air-balloon-flying-over-cappadocia-1534391901-735X412.jpg";
import T3 from "../pics/Italy-Wallpaper-01-3840x2400-1-scaled.jpg";

function Trip() {
  return (
    <div className="Trip">
      <h1>Recent Trips</h1>
      <p>Discover New and Unique Destination with Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={T1}
          heading="Trip To Kerala"
          text="Kerala – named as one of the ten paradises of the world by National Geographic Traveler is the most popular tourist destinations in the country. Its unique traditions and culture, blended with its varied demography, have transformed Kerala one of the most visited and explored tourist destination in the world. It is a perfect gateway for nature lovers, adventure seekers, honeymooners, families and backpackers. Kerala allure with her sun and sand, blue backwater inlets, splendid historical monuments, spice plantations, tea and coffee gardens, lush green forests and much more."
        />

        <TripData
          image={T3}
          heading="Trip To Italy"
          text="Some say Italy has it all, which could be true. It has beautiful scenery ranging from its scenic coastal areas to its colourful mountain ranges. It has a vast wealth of culture, architecture and ancient sites. It has modern cities that embody contemporary Italy, and don’t forget Italy’s gifts to the world's taste buds, its wonderful cuisine and wines. "
        />

        <TripData
          image={T2}
          heading="Trip To Cappadocia,Turkey"
          text="The Fairytale City Cappadocia, is one of the most popular tourist destinations in Turkey. It is located in the centre of Turkey, almost 700km from Istanbul. It is a land of natural wonder famous for its picturesque valleys, unique cave hotels, mystical underground cities and fairy chimneys (unique rock formations). Cappadocia is also most popular for its breathtaking hot air balloon rides at sunrise."
        />
      </div>
    </div>
  );
}

export default Trip;
