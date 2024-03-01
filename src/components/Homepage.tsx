import Projects from "./Projects";
import Contact from "./Contact";
import TechStackContainer from "./TechStackContainer";
import Services from "./Services";
import Splash from "./Splash";
import SocialLinks from "./SocialLinks";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout (() => element.scrollIntoView({behavior: 'smooth'}), 0)
      }
    }
  }, [location])
}


const Homepage = () => {

  useScrollToHash();
  return (
    <>
      <Splash>
        <SocialLinks />
      </Splash>
      <Projects />
      <TechStackContainer />
      <Services />
      <Contact />      
    </>
  )
}

export default Homepage
