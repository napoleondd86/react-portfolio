import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavbarCollapsible = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  };

  const closeNavbar = () => {
    setIsOpen(false)
  }

  return (
    <>
    <div id="hamburger" className='z-50 fixed top-12 right-12 h-12 w-12 text-accent text-4xl font-bold cursor-pointer hover:scale-y-125' onClick={toggleNavbar}>
      {isOpen ? "✕" : "☰"}
    </div>

    <div id='navbar' className={`${isOpen ? "visible opacity-100 " : "invisible opacity-0"} z-40 fixed top-0 w-full h-full bg-birchLight text-accent text-5xl gap-4 flex flex-col justify-center items-center transition-opacity ease-in-out duration-500`}>
      <Link className='hover:text-secondaryOrange' to="/" onClick={closeNavbar}>Home</Link>
      <Link className='hover:text-secondaryOrange' to="/about" onClick={closeNavbar}>About</Link>
      <Link className='hover:text-secondaryOrange' to="/#projects" onClick={closeNavbar}>Projects </Link>
      <Link className='hover:text-secondaryOrange' to="/#contact" onClick={closeNavbar}>Contact</Link>
    </div>
    </>
  )
}

export default NavbarCollapsible