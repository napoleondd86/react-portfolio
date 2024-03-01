import Headshot from '../images/headshot-1-to-1.jpg'

const About = () => {



  return (
    <div className='bg-birchLight  w-full grid justify-center py-16'>
      <section id="about" className='rounded-3xl p-4 justify-center items-center flex flex-col max-w-7xl'>
        <h2>My Story</h2>
        <img src={Headshot} className='Kurt w-64 h-64 rounded-full mt-8 ' alt="Kurt" />
        <div className='mt-16 flex flex-col gap-6 max-w-4xl text-left text-lg px-4 md:px-20'>
        <p>
            I am a Software Developer based in Devils Lake, North Dakota where my deep-rooted love for building and creating comes to life through the development of user-focused applications and tools.  I have been building and creating for as long as I can remember. I have always been drawn to the process of taking an idea and turning it into something tangible.  I spent 8 years building and managing a dual-focused business in logistics/transportation and residential construction, leading a team of up to 5 employees. Recently, I've expanded my expertise by graduating from the University of Minnesota Fullstack Web Development Bootcamp, where I gained hands-on experience in software development, specializing in React, Express, MongoDB, NodeJS, and AI API Integrations. I am now seeking full stack web development opportunities in a dynamic small team or company, where my unique blend of business insight and technical skills can make a substantial impact.
            {/* My professional journey began far from tech, in the dual worlds of logistics/transportation and residential construction. Here, I learned the art of turning concepts into reality, a skill that seamlessly transitioned into my current passion for software development. The values of hard work, teamwork, and self-reliance, ingrained from my days growing up on a dairy farm in central Minnesota, have been my companions throughout.
            I've always been fascinated by the problem-solving aspect of creation, whether it's crafting a piece of art or coding a new app. This curiosity led me to deepen my technical skills at the University of Minnesota Fullstack Web Development Bootcamp, where I dived into React, Express, MongoDB, and NodeJS. This wasn't just about learning to code; it was about finding new ways to apply my love for building in the digital age.
          
            To me, technology is an incredibly powerful tool for making people's lives better and processes more efficient. It's about more than just writing code; it's about understanding needs and crafting solutions that speak directly to those needs.
            Outside of work, I find balance and inspiration through working with my hands whether it be cooking or in my workshop working with clay making pottery, various metals, and wood making furniture, cabinetry, cutting boards, or recently a new wood lathe. I also enjoy spending time with my wife and two children, and I'm always up for a good movie or a board game. I'm also a huge fan of the outdoors, and I love to hike, fish, and explore whenever I get the chance.
            This is my story so far, and I'm excited about what the future holds!
            With 8 years of experience in building and managing a dual-focused business in 
logistics/transportation and residential construction, leading a team of up to 5 employees, I bring a wealth of practical business acumen and team leadership skills. Recently, I've expanded my expertise by graduating from the University of Minnesota Fullstack Web Development Bootcamp, where I gained hands-on experience in software development, specializing in React, Express, MongoDB, NodeJS, and AI API Integrations. I am now seeking full stack web development opportunities in a dynamic small team or company, where my unique blend of business insight and technical skills can make a substantial impact. */}

          </p>
        </div>
      </section>

      <div>

      

      </div>

    </div>
  )
}

export default About