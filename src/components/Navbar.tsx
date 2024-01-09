// npm install @react-aria/button @react-aria/menu @react-aria/menu-button @react-aria/visually-hidden @react-aria/focus-ring

// import { Button, Menu, MenuButton,  } from "react-aria-components"

import {Link} from 'react-aria-components'


const Navbar = () => {
  return (
    <nav className='navbar_container border-2 bg-orange-50 border-orange-600 flex flew-row p-4 place-content-center fixed top-0 w-full z-50 '>
      <ul className='flex '>
        <li className='flex px-2'>
          <Link href="/">Home</Link>
        </li>
        <li className='flex px-2'>
          <Link href="#about">About</Link>
        </li>
        <li className='flex px-2'>
          <Link href="#services">Services</Link>
        </li>
        <li className='flex px-2'>
          <Link href="#projects">Projects</Link>
        </li>
        <li className='flex px-2'>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
