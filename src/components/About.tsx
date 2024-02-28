import Headshot from '../images/headshot-1-to-1.jpg'

const About = () => {



  return (
    <div className='bg-birchLight  w-full grid justify-center py-16'>
      <section id="about" className='rounded-3xl p-4 justify-center items-center flex flex-col max-w-7xl'>
        <h2>My Story</h2>
        <img src={Headshot} className='Kurt w-64 h-64 rounded-full mt-8 ' alt="Kurt" />
        <div className='mt-16 flex flex-col gap-6 max-w-4xl text-left text-lg px-4 md:px-20'>
          <p>
            I am a Software Developer based in Devils Lake, North Dakota where my deep-rooted love for building and creating comes to life through the development of user-focused applications and tools.  I have been building and creating for as long as I can remember. I have always been drawn to the process of taking an idea and turning it into something tangible.
          </p>
          <p>
            My professional journey began far from tech, in the dual worlds of logistics/transportation and residential construction. Here, I learned the art of turning concepts into reality, a skill that seamlessly transitioned into my current passion for software development. The values of hard work, teamwork, and self-reliance, ingrained from my days growing up on a dairy farm in central Minnesota, have been my companions throughout.
          </p>
          <p>
            I've always been fascinated by the problem-solving aspect of creation, whether it's crafting a piece of art or coding a new app. This curiosity led me to deepen my technical skills at the University of Minnesota Fullstack Web Development Bootcamp, where I dived into React, Express, MongoDB, and NodeJS. This wasn't just about learning to code; it was about finding new ways to apply my love for building in the digital age.
          </p>

          <p>
            To me, technology is an incredibly powerful tool for making people's lives better and processes more efficient. It's about more than just writing code; it's about understanding needs and crafting solutions that speak directly to those needs.
          </p>
          <p>
            Outside of work, I find balance and inspiration through working with my hands whether it be cooking or in my workshop working with clay making pottery, various metals, and wood making furniture, cabinetry, cutting boards, or recently a new wood lathe. I also enjoy spending time with my wife and two children, and I'm always up for a good movie or a board game. I'm also a huge fan of the outdoors, and I love to hike, fish, and explore whenever I get the chance.
          </p>
          <p>
            This is my story so far, and I'm excited about what the future holds!
          </p>
        </div>
      </section>

      <div>

      </div>
      <div className='flex-auto flex gap-8 max-w-7xl bg-birchLight pt-24'>
        <div className="flex flex-col gap-8">
          <img src="/images/about12.png" alt="" />
          <img src="/images/about9.png" alt="" />
          <img src="/images/about24.png" alt="" />
          <img src="/images/about2.png" alt="" />
          <img src="/images/about13.png" alt="" />
          <img src="/images/about20.png" alt="" />
          <img src="/images/about27.png" alt="" />
          <img src="/images/about1.png" alt="" />
        </div>
        <div className="flex flex-col gap-8">
          <img src="/images/about23.png" alt="" />
          <img src="/images/about3.png" alt="" />
          <img src="/images/about6.png" alt="" />
          <img src="/images/about7.png" alt="" />
          <img src="/images/about17.png" alt="" />
          <img src="/images/about22.png" alt="" />
          <img src="/images/about30.png" alt="" />
          <img src="/images/about32.png" alt="" />
        </div>
        <div className="flex flex-col gap-8">
          <img src="/images/about21.png" alt="" />
          <img src="/images/about18.png" alt="" />
          <img src="/images/about19.png" alt="" />
          <img src="/images/about31.png" alt="" />
          <img src="/images/about28.png" alt="" />
          <img src="/images/about5.png" alt="" />
          <img src="/images/about16.png" alt="" />
          <img src="/images/about29.png" alt="" />
          <img src="/images/about33.png" alt="" />
        </div>
        <div className="flex flex-col gap-8">
          <img src="/images/about8.png" alt="" />
          <img src="/images/about10.png" alt="" />
          <img src="/images/about11.png" alt="" />
          <img src="/images/about25.png" alt="" />
          <img src="/images/about14.png" alt="" />
          <img src="/images/about15.png" alt="" />
          <img src="/images/about17.png" alt="" />
          <img src="/images/about26.png" alt="" />
        </div>


      </div>

    </div>
  )
}

export default About