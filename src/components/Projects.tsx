/// <reference types="vite-plugin-svgr/client" />

import React, { ForwardedRef } from 'react'
import { Link } from 'react-aria-components';
import GithubIcon from '../assets/github.svg?react'
import ReactIcon from '../assets/react.svg?react'
import TailwindIcon from '../assets/tailwindcss.svg?react'
import OpenAIIcon from '../assets/openai.svg?react'
const Projects = React.forwardRef(({/* future props */ }, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section ref={ref} id="projects" className="bg-background p-4 justify-center items-center flex flex-col max-w-7xl py-16 lg:px-20">

      <h2>Projects</h2>
      <div className="projects_container flex flex-row flex-wrap justify-evenly gap-4 mt-8" >
        <div className="project_card h-auto grid sm:grid-cols-2 border-2 border-x-accent ">
          <div className='grid gap-2 p-4 text-left '>
            <div className='w-full flex items-center justify-between'>
              <h3 className='text-xl'>Upward Arc</h3>
              <Link href="https://github.com/Osorkon21/step-by-step-app" className="project_link px-2 flex items-center gap-2 hover:text-accent hover:scale-95" target="_blank" rel="noopener noreferrer">
                <div>Github</div>
                <GithubIcon className='h-10 w-10 ' />
              </Link>
            </div>
            <p className=''>
              Upward Arc is a web application that allows users to create and track their goals.  Users can create a goal, break it down into smaller steps, and track their progress as they complete each step. 
            </p>
            <div className='mt-8'><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Tailwind CSS, OpenAI API, JWT </div>
            <div className='flex gap-2'>
                <ReactIcon className='h-8 w-8 hover:animate-spin' />
                <img className="h-8 w-8 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="" />
                <img className="h-8 w-8 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" />
                <img className="h-8 w-8 hover:animate-spin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="" />
                <TailwindIcon className='h-8 w-8 hover:animate-spin' />
                <OpenAIIcon className='h-8 w-8 hover:animate-spin' />
                
              
            </div>
            
          </div>

          <Link href="https://www.upwardarc.com/" className="project_link focus:outline-none grayscale hover:grayscale-0 hover:scale-95 transition-transform" target="_blank" rel="noopener noreferrer"><img src="/images/upwardarc-splash.png" alt="Upward Arc Homepage" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="project_card border-2 border-x-accent">
            <h3>Project 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              voluptatum, quia, quos, voluptate voluptas quas tempora
              voluptatibus quibusdam doloribus quod consequatur. Quisquam
              voluptate, quibusdam voluptas quas tempora voluptatibus quibusdam
              doloribus quod consequatur.
            </p>
            <a href="#">View Project</a>
          </div>
          <div className="project_card border-2 border-x-accent">
            <h3>Project 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              voluptatum, quia, quos, voluptate voluptas quas tempora
              voluptatibus quibusdam doloribus quod consequatur. Quisquam
              voluptate, quibusdam voluptas quas tempora voluptatibus quibusdam
              doloribus quod consequatur.
            </p>
            <a href="#">View Project</a>
          </div>

        </div>

      </div>
    </section>
  )
})

export default Projects;
