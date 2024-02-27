import Projects from "./Projects";
import Contact from "./Contact";
import TechStackContainer from "./TechStackContainer";
import Services from "./Services";
import Splash from "./Splash";
import SocialLinks from "./SocialLinks";


const Homepage = () => {

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
