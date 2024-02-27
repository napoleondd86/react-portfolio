import Headshot from '../images/headshot-1-to-1.jpg'

const About = () => {



  return (
    <div className='bg-birchLight  w-full flex justify-center py-16'>
      <section id="about" className='rounded-3xl p-4 justify-center items-center flex flex-col max-w-7xl'>
        <h2>My Story</h2>
        <img src={Headshot} className='Kurt w-64 h-64 rounded-full mt-8 ' alt="Kurt" />
        <div className='mt-16 flex flex-col gap-6 max-w-4xl text-left text-lg px-4 md:px-20'>
          {/* <p className='mt-8 mx-16 '>
            In my previous career, I was able to do just that.  I built my own business, a dual-focused business in logistics/transportation and residential construction, from the ground up.

            Growing up on a dairy farm in central Minnesota instilled in me the value of hard work, teamwork, personal accountability, and self-reliance, as taught by my parents.  I have always been a problem solver and a creative thinker.  I am a self-starter and I am always looking for ways to improve and grow.  I am a lifelong learner and I am always looking for ways to expand my know

          </p> */}

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
            Outside of work, I find balance and inspiration through working with my hands whether it be cooking or in my workshop working with wood making furniture, cabinetry, cutting boards, or recently a new wood lathe. These experiences not only recharge me but also bring new perspectives to my work.

            My story is one of exploration, learning, and a constant drive to create. It's about finding joy in the process and the satisfaction of bringing ideas to life, whether through code, construction, or any other medium that allows for creative expression.
          </p>
          <p>
            This is my story so far, and I'm excited about what the future holds!
          </p>
        </div>
      </section>

      <div>

      </div>

    </div>
  )
}

export default About