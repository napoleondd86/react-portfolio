import Headshot from '../images/headshot-1-to-1.jpg'
import openai from '../images/icons/openai.svg'
import netlify from '../images/icons/netlify.svg'
import copilot from '/copilot.svg'
import vite from '/vite.svg'

const About = () => {
  return (
    <section id="about" className='border-2 rounded-3xl bg-rainee bg-opacity-60 border-finn mx-4 p-4 justify-center items-center flex flex-col max-w-7xl'>
      <h2>About Me</h2>
      <img src={Headshot} className='Kurt w-64 h-64 rounded-full mt-4 ' alt="Kurt" />
      <div className='mt-8'>
        <h3 className='text-3xl font-semibold'>My Story</h3>
        <p className='mt-4 mx-4 md:px-20'>
          With 8 years of experience in building and managing a dual-focused business in logistics/transportation and residential construction, leading a team of up to 5 employees, I bring a wealth of practical business acumen and team leadership skills. Recently, I've expanded my expertise by graduating from the University of Minnesota Fullstack Web Development Bootcamp, where I gained hands-on experience in software development, specializing in React, Express, MongoDB, and NodeJS. I am now seeking full stack web development opportunities in a dynamic small team or company, where my unique blend of business insight and technical skills can make a substantial impact.
        </p>
      </div>
      <div className='my-8'>
        <h3 className='text-3xl font-semibold'>Technologies and Tools</h3>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit quas rerum dolores, perspiciatis odit blanditiis itaque laboriosam quis expedita beatae aliquid nisi exercitationem illo eius facere cumque necessitatibus voluptatibus.</p> */}
        <div className='techstack mt-8 flex flex-wrap justify-evenly'>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-cwhite bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <h4 className='text-md ml-4'>Javascript</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <h4 className='text-md ml-4'>HTML</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <h4 className='text-md ml-4'>CSS</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src={openai} />
            <h4 className='text-md ml-4'>OpenAI API</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <h4 className='text-md ml-4'>MongoDB</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            <h4 className='text-md ml-4'>MySQL</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
            <h4 className='text-md ml-4'>Sequelize</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            <h4 className='text-md ml-4'>NodeJS</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <h4 className='text-md ml-4'>React</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" />
            <h4 className='text-md ml-4'>Express</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
            <h4 className='text-md ml-4'>Bootstrap</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
            <h4 className='text-md ml-4'>Tailwind CSS</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <h4 className='text-md ml-4'>Git</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" />
            <h4 className='text-md ml-4'>Handlebars</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />
            <h4 className='text-md ml-4'>jQuery</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
            <h4 className='text-md ml-4'>Typescript</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            <h4 className='text-md ml-4'>Python</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" />
            <h4 className='text-md ml-4'>Heroku</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src={netlify} />
            <h4 className='text-md ml-4'>Netlify</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src={vite} />
            <h4 className='text-md ml-4'>Vite</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" />
            <h4 className='text-md ml-4'>Jira</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" />
            <h4 className='text-md ml-4'>Trello</h4>
          </div>
          
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
            <h4 className='text-md ml-4'>VSCode</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
            <h4 className='text-md ml-4'>NPM</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src={copilot} />
            <h4 className='text-md ml-4'>GitHub Copilot</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
            <h4 className='text-md ml-4'>GraphQL</h4>
          </div>
          <div className='mt-6 md:mx-4 mx-2 p-4 bg-raffia100 bg-opacity-30 rounded-xl flex items-center md:w-48 w-40'>
            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
            <h4 className='text-md ml-4'>Jest</h4>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About