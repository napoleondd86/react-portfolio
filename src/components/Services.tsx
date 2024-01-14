import '../animation.css'
import React from 'react';
import useOnscreen from '../hooks/useOnscreen';

const Services = () => {

  const [setRef, visible] = useOnscreen({ threshold: 0.2 })

  return (
    <div id="services" className="services_container border-2 rounded-3xl bg-rainee bg-opacity-60 border-finn mx-4 p-4 items-center flex flex-col max-w-7xl mt-16 justify-evenly">
   
      <h2>Services</h2>
      <div className=" flex justify-evenly gap-4 mt-10 flex-wrap md:flex-nowrap">
        <div ref={setRef} className={`service p-4 bg-cwhite bg-opacity-30 rounded-3xl fadeInLeft flex flex-col items-center ${visible ? 'startAnimation': 'fadeInLeft'}`}>
          <img className="w-20 h-20 " src="/web-development.256x185.png" alt="Web Devolopment Icon" />
          <h3 className="font-semibold p-4">Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptatum, quia, quos, voluptate voluptas quas tempora
            voluptatibus quibusdam doloribus quod consequatur. Quisquam
            voluptate, quibusdam voluptas quas tempora voluptatibus quibusdam
            doloribus quod consequatur.
          </p>
        </div>
        <div ref={setRef} className={`service p-4 bg-cwhite bg-opacity-30 rounded-3xl fadeInLeft flex flex-col items-center ${visible ? 'startAnimation': 'fadeInTop'}`}>
          <img className="w-20 h-20 " src="/images/icons/design.svg" alt="Design Icon" />
          <h3 className="font-semibold p-4">Design Customization</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptatum, quia, quos, voluptate voluptas quas tempora
            voluptatibus quibusdam doloribus quod consequatur. Quisquam
            voluptate, quibusdam voluptas quas tempora voluptatibus quibusdam
            doloribus quod consequatur.
          </p>
        </div>
        <div ref={setRef} className={`service p-4 bg-cwhite bg-opacity-30 rounded-3xl fadeInLeft flex flex-col items-center ${visible ? 'startAnimation': 'fadeInRight'}`}>
          <img className="w-20 h-20 " src="/images/icons/web-developer.svg" alt="Mobile Responsiveness Icon" />
          <h3 className="font-semibold p-4">Mobile Responsive Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptatum, quia, quos, voluptate voluptas quas tempora
            voluptatibus quibusdam doloribus quod consequatur. Quisquam
            voluptate, quibusdam voluptas quas tempora voluptatibus quibusdam
            doloribus quod consequatur.
          </p>
        </div>

      </div>

    </div>

      )
}

export default Services;