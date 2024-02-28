

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer.tsx'
import About from './components/About.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import NavbarCollapsible from './components/NavbarCollapsible.tsx'
import Homepage from './components/Homepage.tsx'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <main >
      <BrowserRouter>
        <ScrollToTop />
        <NavbarCollapsible />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/About' element={<About />} />
        </Routes>       
       
        <Footer />

      </BrowserRouter>
      <div className="fixed-element md:block">__________________                    KURT WENSMANN PORTFOLIO                 __________________</div>
    </main>


  )
}

export default App



