import * as React from "react";
import "../style/page.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Introduction from "../components/Introduction";
import OurSolutions from "../components/OurSolutions";
import AboutUs from "../components/AboutUs";
import AboutUsCardComponent from "../components/cardcomponents/AboutUsCardComponent";
import OurTechnologies from "../components/OurTechnologies";
import ContactUs from "../components/formcomponents/ContactUs";
const IndexPage = () => {
  const [darkMode, setDarkMode] = React.useState("false");

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="navbar_border">
        <Navbar />
      </div>
      <div className="hero" id="home">
        <HeroSection />
      </div>
      <div className="services_general" id="services">
        <Introduction />
      </div>
      <div className="our_solution">
        <OurSolutions />
      </div>
      {/* <div className="hero-short"></div> */}
      <div className="about_us" id="about">
        <AboutUs />
        <AboutUsCardComponent className="mt-6" />
      </div>
      <div className="hero-short"></div>
      <div className="technologies" id="tech">
        <OurTechnologies />
      </div>
      <div className="contact_us" id="contact">
        <ContactUs />
      </div>
      <div className="footer flex text-white ">
        <hr />
        <div>Blizzard inc</div>
        <div></div>
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
