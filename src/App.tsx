
// import {  useState } from 'react' // Children

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer.tsx'
import Navbar from './components/Navbar.tsx'
import Splash from './components/Splash.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'
import SocialLinks from './components/SocialLinks.tsx'
import Services from './components/Services.tsx'
import TechStackContainer from './components/TechStackContainer.tsx'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <main >
      <div className='splash mt-16 bg-background bg-cover bg-center bg-fixed w-full flex flex-col justify-center items-center'>
        <Navbar />
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



{/* <h1>Kurt Wensmann</h1>
<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.tsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */}