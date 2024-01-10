// npm install @react-aria/button @react-aria/menu @react-aria/menu-button @react-aria/visually-hidden @react-aria/focus-ring

// import { Button, Menu, MenuButton,  } from "react-aria-components"

import {Link} from 'react-aria-components'


const Navbar = () => {
  return (
    <nav className='navbar_container border-2 bg-orange-50 border-orange-600 flex flew-row p-4 place-content-center fixed top-0 w-screen z-50 '>
      <ul className='flex '>
        <li className=' flex px-2'>
          <Link className="nav-link p-2" href="/">Home</Link>
        </li>
        <li className=' flex px-2'>
          <Link className="nav-link p-2" href="#about">About</Link>
        </li>
        <li className=' flex px-2'>
          <Link className="nav-link p-2" href="#services">Services</Link>
        </li>
        <li className=' flex px-2'>
          <Link className="nav-link p-2" href="#projects">Projects</Link>
        </li>
        <li className=' flex px-2'>
          <Link className="nav-link p-2" href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
