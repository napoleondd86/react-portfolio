
// import {  useState } from 'react' // Children

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer.tsx'
import Splash from './components/Splash.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'
import SocialLinks from './components/SocialLinks.tsx'
import Services from './components/Services.tsx'
import TechStackContainer from './components/TechStackContainer.tsx'
import NavbarCollapsible from './components/NavbarCollapsible.tsx'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <main >
      <div >
        <NavbarCollapsible />
        <Splash >
          <SocialLinks />
        </Splash>
        <About />
        <Projects />
        <TechStackContainer />
        <Services />
        <Contact />
        <Footer />

      </div>
      <div className="fixed-element md:block">__________________                    KURT WENSMANN PORTFOLIO                 __________________</div>
    </main>


  )
}

export default App



