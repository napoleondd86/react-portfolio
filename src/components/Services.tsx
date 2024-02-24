/// <reference types="vite-plugin-svgr/client" />

import '../animation.css'
import React, { ForwardedRef } from 'react'
import useOnscreen from '../hooks/useOnScreen';
import BackendIcon from '../assets/backend.svg?react'
// import AiIcon from '../assets/ai-icon2.png?react'
const Services = React.forwardRef(({/* future props */ }, ref: ForwardedRef<HTMLDivElement>) => {

  const [setRef1, visible1] = useOnscreen({ threshold: 0.1 });
  const [setRef2, visible2] = useOnscreen({ threshold: 0.1 });
  const [setRef3, visible3] = useOnscreen({ threshold: 0.1 });

  return (
    <section ref={ref} id="services" className="services_container rounded-3xl  px-4 py-16 items-center flex flex-col max-w-7xl lg:px-20 justify-evenly h-100 bg-background">

      <h2 className=''>Services</h2>
      <div className=" flex justify-evenly gap-8 mt-8 flex-wrap md:flex-nowrap">
        <article ref={setRef1} className={`service_card bg-white p-4 shadow-xl rounded-3xl flex flex-col items-center fadeInBottom ${visible1 ? 'startAnimation startAnimation1' : ''}`}>
          <img className="w-32 h-32 " src="/web-development.256x185.png" alt="Web Devolopment Icon" />
          <h3 className="font-semibold p-4">Front End Development</h3>
          <p>
          Creating responsive, user-friendly interfaces with modern technologies like React, HTML5, CSS3, and JavaScript. My focus on UI/UX design principles ensures engaging and intuitive user experiences across all devices.
          </p>
        </article>
        <article ref={setRef2} className={`service_card bg-white p-4 shadow-xl rounded-3xl flex flex-col items-center fadeInBottom ${visible2 ? 'startAnimation startAnimation2' : ''}`}>
        <BackendIcon className="w-32 h-32 " />
          <h3 className="font-semibold pb-4">Backend Development</h3>
          <p>
          Using Node.js, Express, MongoDB, and MySQL to build scalable, efficient web applications. My expertise in data management and API integration forms the backbone of high-performance platforms.
          </p>
        </article>
        <article ref={setRef3} className={`service_card bg-white p-4 shadow-xl rounded-3xl flex flex-col items-center fadeInBottom ${visible3 ? 'startAnimation startAnimation3' : ''}`}>
          <img className="w-32 h-32 " src="/ai-icon3.jpg" alt="Mobile Responsiveness Icon" />
          {/* <AiIcon className="w-32 h-32 " /> */}
          <h3 className="font-semibold p-4">AI Integrations</h3>
          <p>
          I'm expanding my skills and expertise in AI integrations, using emerging technologies like the OpenAI API to add intelligent features to applications. This includes enhancing systems with smart functionalities through natural language processing and machine learning.
          </p>
        </article>

      </div>

    </section>

  )
})

export default Services;