import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Splash from './components/Splash'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=''>
   
      <Navbar />
      <Splash >
        <SocialLinks />
      </Splash>
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
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