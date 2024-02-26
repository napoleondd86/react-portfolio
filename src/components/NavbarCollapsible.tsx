import { useState } from 'react'

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
      <a className='hover:text-secondaryOrange' href="#" onClick={closeNavbar}>Home</a>
      <a className='hover:text-secondaryOrange' href="#" onClick={closeNavbar}>About</a>
      <a className='hover:text-secondaryOrange' href="#projects" onClick={closeNavbar}>Projects</a>
      <a className='hover:text-secondaryOrange' href="#contact" onClick={closeNavbar}>Contact</a>
    </div>
    </>
  )
}

export default NavbarCollapsible