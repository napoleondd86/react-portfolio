import '../animation.css'
import React, { ForwardedRef } from 'react'
import useOnscreen from '../hooks/useOnScreen';

const Services = React.forwardRef(({/* future props */}, ref: ForwardedRef<HTMLDivElement>) => {

  const [setRef1, visible1] = useOnscreen({ threshold: 0.1 });
  const [setRef2, visible2] = useOnscreen({ threshold: 0.1 });
  const [setRef3, visible3] = useOnscreen({ threshold: 0.1 });

  return (
    <div ref={ref} id="services" className="services_container rounded-3xl  px-4 items-center flex flex-col max-w-7xl mx-16 justify-evenly h-100">
   
      <h2 className=''>Services</h2>
      <div className=" flex justify-evenly gap-4 m-8 flex-wrap md:flex-nowrap">
        <article ref={setRef1} className={`service_card p-4 rounded-3xl flex flex-col items-center fadeInBottom ${visible1 ? 'startAnimation startAnimation1': ''}`}>
          <img className="w-20 h-20 " src="/web-development.256x185.png" alt="Web Devolopment Icon" />
          <h3 className="font-semibold p-4">Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptatum, quia, quos, voluptate voluptas quas tempora
            voluptatibus quibusdam doloribus quod consequatur. Quisquam
            voluptate, quibusdam voluptas quas tempora voluptatibus quibusdam
            doloribus quod consequatur.
          </p>
        </article>
        <article ref={setRef2} className={`service_card p-4 rounded-3xl flex flex-col items-center fadeInBottom ${visible2 ? 'startAnimation startAnimation2': ''}`}>
          <img className="w-20 h-20 " src="/images/icons/design.svg" alt="Design Icon" />
          <h3 className="font-semibold p-4">Design Customization</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptatum, quia, quos, voluptate voluptas quas tempora
            voluptatibus quibusdam doloribus quod consequatur. Quisquam
            voluptate, quibusdam voluptas quas tempora voluptatibus quibusdam
            doloribus quod consequatur.
          </p>
        </article>
        <article ref={setRef3} className={`service_card p-4 rounded-3xl flex flex-col items-center fadeInBottom ${visible3 ? 'startAnimation startAnimation3': ''}`}>
          <img className="w-20 h-20 " src="/images/icons/web-developer.svg" alt="Mobile Responsiveness Icon" />
          <h3 className="font-semibold p-4">Mobile Responsive Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptatum, quia, quos, voluptate voluptas quas tempora
            voluptatibus quibusdam doloribus quod consequatur. Quisquam
            voluptate, quibusdam voluptas quas tempora voluptatibus quibusdam
            doloribus quod consequatur.
          </p>
        </article>

      </div>

    </div>

      )
})

export default Services;