/// <reference types="vite-plugin-svgr/client" />

import React, { ForwardedRef } from 'react'
import { Link } from 'react-aria-components';
import GithubIcon from '../assets/github.svg?react'
// import ReactIcon from '../assets/react.svg?react'
import TailwindIcon from '../assets/tailwindcss.svg?react'
import OpenAIIcon from '../assets/openai.svg?react'
import JqueryIcon from '../assets/jquery.svg?react'
import FigmaIcon from '../assets/figma.svg?react'

const Projects = React.forwardRef(({/* future props */ }, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className='w-full bg-birchLight grid justify-center'>
      <section ref={ref} id="projects" className="p-4 md:p-8 justify-center items-center flex flex-col max-w-7xl py-16 lg:px-20">

        <h2>Currently <span className='text-5xl font-bold text-accent '>Building</span> and past <span className='text-5xl font-bold '>Builds</span></h2>
        <div className="projects_container flex flex-row flex-wrap justify-evenly gap-12 mt-16" >
          <div className="project_card border-2 border-accent h-auto grid md:grid-cols-2 lg:grid-cols-[60%_40%] xs:p-4 bg-white rounded-3xl   transition-transform duration-500 shadow-xl ">
            <div className='grid gap-2 p-4 text-left '>
              <div className='w-full flex items-center justify-between'>
                <h3 className='text-xl text-secondaryOrange font-bold'>Upward Arc</h3>
                <Link href="https://github.com/Osorkon21/step-by-step-app" className="project_link px-2 flex items-center gap-2 hover:text-accent hover:scale-95 transition-transform rounded-lg" target="_blank" rel="noopener noreferrer">
                  <div>Github </div>
                  <GithubIcon className='h-10 w-10 ' />
                </Link>
              </div>
              <p className='text-3xl font-semibold'>Goal Setting App</p>
              <div className='py-6 xs:px-6'>
                <p>
                  Upward Arc is a web application that allows users to create and track their goals.  Users can create a goal, break it down into smaller steps, and track their progress as they complete each step.  The application uses the OpenAI API to generate steps for the user stated Goal and uses JWT for user authentication.
                </p>
                <div className='mt-8'><strong>Build Tools:</strong> React, Node.js, Express, MongoDB, Tailwind CSS, OpenAI API, React Aria Components, JWT </div>

              </div>
              <div className='flex gap-2 flex-wrap'>
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="Node.js Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12  hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12  hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12  hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express Icon" />

                <TailwindIcon className='h-10 w-10 xs:h-12 xs:w-12  hover:animate-spin' />
                <OpenAIIcon className='h-10 w-10 xs:h-12 xs:w-12  hover:animate-spin' />
                <FigmaIcon className='h-10 w-10 xs:h-12 xs:w-12  hover:animate-spin' />
              </div>
            </div>
            <Link href="https://www.upwardarc.com/" className="project_link relative flex xs:brightness-75 xs:contrast-125 hover:brightness-100 hover:contrast-100 transition-transform duration-300 group items-center justify-center p-4 rounded-3xl" target="_blank" rel="noopener noreferrer">
              <img className='rounded-3xl xs:group-hover:scale-105 md:group-hover:scale-105 transition-transform duration-500' src="/images/upwardarc5.png" alt="Upward Arc Homepage" />
              <div className="absolute inset-0 flex justify-center items-center xs:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="flex justify-center items-center bg-black bg-opacity-50 text-background font-bold text-sm rounded-full w-24 h-24 flex-col">
                  View Site
                </div>
              </div>
            </Link>
          </div>
          <div className="project_card border-2 border-secondaryOrange h-auto grid md:grid-cols-2 lg:grid-cols-[60%_40%] p-4 bg-white rounded-3xl   transition-transform duration-500 shadow-xl ">
            <div className='grid gap-2 p-4 text-left '>
              <div className='w-full flex items-center justify-between'>
                <h3 className='text-xl text-secondaryOrange font-bold'>Unblurred</h3>
                <Link href="https://github.com/napoleondd86/Project-2-Video-Game-Reviews" className="project_link px-2 flex items-center gap-2 hover:text-accent hover:scale-95 transition-transform rounded-lg" target="_blank" rel="noopener noreferrer">
                  <div>Github </div>
                  <GithubIcon className='h-10 w-10 ' />
                </Link>
              </div>
              <p className='text-3xl font-semibold'>Video Game Review App</p>
              <div className='py-6 xs:px-6'>
                <p>
                  Unblurred is a video game review site that allows users to create and share reviews of their favorite games.  Users can create a review, rate the game, and share their thoughts with the community.  The application uses the RAWG API to pull in game data.
                </p>
                <div className='mt-8'><strong>Build Tools:</strong> Node.js, Express, MySQL, Sequelize, HTML, CSS, Handlebars, Bootstrap, JQuery, Third Party API </div>

              </div>
              <div className='flex gap-2 flex-wrap'>
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="Sequelize Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" alt="Handlebars Icon" />

                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap Icon" />
                <JqueryIcon className='h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin' />
              </div>
            </div>
            <Link href="https://unblurred-527419df040d.herokuapp.com/" className="project_link relative flex xs:brightness-75 xs:contrast-125 hover:brightness-100 hover:contrast-100 transition-transform duration-300 group items-center justify-center p-4 rounded-3xl" target="_blank" rel="noopener noreferrer">
              <img className='rounded-3xl xs:group-hover:scale-105 md:group-hover:scale-105 transition-transform duration-500 bg-gray-900' src="/logo3.png" alt="Upward Arc Homepage" />
              <div className="absolute inset-0 flex justify-center items-center xs:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="flex justify-center items-center bg-black bg-opacity-50 text-background font-bold text-sm rounded-full w-24 h-24 flex-col">
                  View Site
                </div>
              </div>
            </Link>
          </div>
          <div className="project_card border-2 border-secondaryOrange h-auto grid md:grid-cols-2 lg:grid-cols-[60%_40%] p-4 bg-white rounded-3xl   transition-transform duration-500 shadow-xl ">
            <div className='grid gap-2 p-4 text-left '>
              <div className='w-full flex items-center justify-between'>
                <h3 className='text-xl text-secondaryOrange font-bold'>Robo Murder Mystery</h3>
                <Link href="https://github.com/napoleondd86/robot-murder-mystery" className="project_link px-2 flex items-center gap-2 hover:text-accent hover:scale-95 transition-transform rounded-lg" target="_blank" rel="noopener noreferrer">
                  <div>Github</div>
                  <GithubIcon className='h-10 w-10 ' />
                </Link>
              </div>
              <p className='text-3xl font-semibold'>Robot Mystery Game</p>
              <div className='py-6 xs:px-6'>
                <p>
                  A Robot Murder Mystery Game where you try to guess who was the murderer before they strike again! Utilized jQuery, Bootstrap, CSS3, HTML5, JavaScript and Mockaroo API for random info generation, Robohash, and Dalle3.
                </p>
                <div className='mt-8'><strong>Build Tools:</strong>jQuery, Bootstrap, CSS3, HTML5, JavaScript </div>

              </div>
              <div className='flex gap-2 flex-wrap'>
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="Javascript Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap Icon" />
                <JqueryIcon className='h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin' />
              </div>
            </div>
            <Link href="https://napoleondd86.github.io/robot-murder-mystery/" className="project_link relative flex xs:brightness-75 xs:contrast-125 hover:brightness-100 hover:contrast-100 transition-transform duration-300 group items-center justify-center p-4 rounded-3xl" target="_blank" rel="noopener noreferrer">
              <img className='rounded-3xl xs:group-hover:scale-105 md:group-hover:scale-105 transition-transform duration-500' src="/images/murder-robots-group.jpg" alt="Upward Arc Homepage" />
              <div className="absolute inset-0 flex justify-center items-center xs:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="flex justify-center items-center bg-black bg-opacity-50 text-background font-bold text-sm rounded-full w-24 h-24 flex-col">
                  View Site
                </div>
              </div>
            </Link>
          </div>
          <div className="project_card border-2 border-secondaryOrange h-auto grid md:grid-cols-2 lg:grid-cols-[60%_40%] p-4 bg-white rounded-3xl   transition-transform duration-500 shadow-xl ">
            <div className='grid gap-2 p-4 text-left '>
              <div className='w-full flex items-center justify-between'>
                <h3 className='text-xl text-secondaryOrange font-bold'>Tech Blog</h3>
                <Link href="https://github.com/napoleondd86/tech-blog" className="project_link px-2 flex items-center gap-2 hover:text-accent hover:scale-95 transition-transform rounded-lg" target="_blank" rel="noopener noreferrer">
                  <div>Github </div>
                  <GithubIcon className='h-10 w-10 ' />
                </Link>
              </div>
              <p className='text-3xl font-semibold'>CMS Style Tech Blog</p>
              <div className='py-6 xs:px-6'>
                <p>
                A CMS-style blog site where developers can publish their blog posts and comment on other developers' posts as well.  The application uses Handlebars.js as the templating engine and Sequelize as the ORM.
                </p>
                <div className='mt-8'><strong>Build Tools:</strong> Node.js, Express, MySQL, Sequelize, HTML, CSS, Handlebars, Bootstrap, JQuery, Third Party API </div>

              </div>
              <div className='flex gap-2 flex-wrap'>
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="Sequelize Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Icon" />
                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" alt="Handlebars Icon" />

                <img className="h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap Icon" />
                <JqueryIcon className='h-10 w-10 xs:h-12 xs:w-12 hover:animate-spin' />
              </div>
            </div>
            <Link href="https://kurts-tech-blog-4b5c0e5dc80d.herokuapp.com/" className="project_link relative flex xs:brightness-75 xs:contrast-125 hover:brightness-100 hover:contrast-100 transition-transform duration-300 group items-center justify-center p-4 rounded-3xl" target="_blank" rel="noopener noreferrer">
              <img className='rounded-3xl xs:group-hover:scale-105 md:group-hover:scale-105 transition-transform duration-500' src="/images/techblog.png" alt="Upward Arc Homepage" />
              <div className="absolute inset-0 flex justify-center items-center xs:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="flex justify-center items-center bg-black bg-opacity-50 text-background font-bold text-sm rounded-full w-24 h-24 flex-col">
                  View Site
                </div>
              </div>
            </Link>
          </div>
          

        </div>
      </section>
    </div>
  )
})

export default Projects;
