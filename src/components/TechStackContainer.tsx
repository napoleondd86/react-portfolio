import AnimatedElement from "./AnimatedElement";
import openai from '../images/icons/openai.svg'
import netlify from '../images/icons/netlify.svg'
import copilot from '/copilot.svg'
import vite from '/vite.svg'
import React, { ForwardedRef } from 'react'


import tailwind from '/tailwindcss.svg'




const skills = [
  { imageUrl: openai, text: "OpenAI API", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", text: "React", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", text: "MongoDB", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg", text: "Mongoose", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", text: "NodeJS", },
  { imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", text: "Express", },
  { imageUrl: copilot, text: "GitHub Copilot", },
  { imageUrl: vite, text: "Vite", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg", text: "Javascript", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", text: "HTML", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", text: "CSS", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", text: "MySQL", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg", text: "Sequelize", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", text: "Bootstrap", },
  { imageUrl: tailwind, text: "Tailwind CSS", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", text: "Git", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg", text: "Handlebars", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", text: "jQuery", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg", text: "Typescript", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", text: "Python", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg", text: "Heroku", },
  { imageUrl: netlify, text: "Netlify", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", text: "Jira", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg", text: "Trello", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", text: "VSCode", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", text: "NPM", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", text: "GraphQL", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", text: "Jest", },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", text: "Figma", },
];



const SkillsContainer = React.forwardRef(({/* future props */}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className='py-16 bg-birchLight  w-full '>
      <h2 className=''>My Tool Bag</h2>
      <p className='mt-4 mx-4 md:px-20'>
        I have experience with the following technologies and tools:
      </p>
      <div className='techstack mt-8 flex flex-wrap justify-evenly'>
        <div className="gap-4 flex flex-wrap justify-center max-w-7xl ">
          {skills.map((skill, index) => (
            <AnimatedElement key={index} imageUrl={skill.imageUrl} text={skill.text} />
          ))}
        </div>
      </div>
    </div>


  );
});


export default SkillsContainer;