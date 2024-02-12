/// <reference types="vite-plugin-svgr/client" />

import { Link } from "react-aria-components";
import '../animation.css'
import Sawblade from "../assets/sawblade.svg?react";
import React, { ForwardedRef } from 'react'
// import sawblade from '/sawblade.svg'

const SocialLinks = React.forwardRef(({/* future props */}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className="socialLinks_container flex  items-center justify-center flex-wrap">
      <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link flex flex-col items-center justify-center h-12 w-12 group mx-4 text-center rounded-full">
            <svg className="social-logo flex group-hover:hidden w-full h-full" aria-label="GitHub icon" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M296.133 354.174c49.885-5.891 102.942-24.029 102.942-110.192 0-24.49-8.624-44.448-22.67-59.869 2.266-5.89 9.515-28.114-2.734-58.947 0 0-18.139-5.898-60.759 22.669-18.139-4.983-38.09-8.163-56.682-8.163-19.053 0-39.011 3.18-56.697 8.163-43.082-28.567-61.22-22.669-61.22-22.669-12.241 30.833-4.983 53.057-2.718 58.947-14.061 15.42-22.677 35.379-22.677 59.869 0 86.163 53.057 104.301 102.942 110.192-6.344 5.452-12.241 15.873-14.507 30.387-12.702 5.438-45.808 15.873-65.758-18.592 0 0-11.795-21.31-34.012-22.669 0 0-22.224-.453-1.813 13.592 0 0 14.96 6.812 24.943 32.653 0 0 13.6 43.089 76.179 29.48v38.543c0 5.906-4.53 12.702-15.865 10.89C96.139 438.977 32.2 354.626 32.2 255.77c0-123.807 100.216-224.022 224.03-224.022 123.347 0 224.023 100.216 223.57 224.022 0 98.856-63.946 182.754-152.828 212.688-11.342 2.266-15.873-4.53-15.873-10.89V395.45c.001-20.873-6.811-34.465-14.966-41.276zM512 256.23C512 114.73 397.263 0 256.23 0 114.73 0 0 114.73 0 256.23 0 397.263 114.73 512 256.23 512 397.263 512 512 397.263 512 256.23z"></path></svg>
          <span className="social-text mt-2 hidden group-hover:block  font-bold text-xl ">GitHub</span>           
      </Link>
      <Link href="https://www.linkedin.com/in/kurt-wensmann/" target="_blank" rel="noopener noreferrer" className="social-link flex mx-4 items-center justify-center rounded-xl  hover:shadow-xl h-12 w-12 group ">
        <svg className="social-logo flex group-hover:hidden w-full h-full" aria-label="LinkedIn icon" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M160.008 423h-70V197h70zm6.984-298.004c0-22.629-18.36-40.996-40.976-40.996C103.312 84 85 102.367 85 124.996 85 147.633 103.313 166 126.016 166c22.617 0 40.976-18.367 40.976-41.004zM422 298.664C422 237.996 409.184 193 338.312 193c-34.054 0-56.914 17.031-66.246 34.742H272V197h-68v226h68V310.79c0-29.388 7.48-57.856 43.906-57.856 35.93 0 37.094 33.605 37.094 59.722V423h69zM512 452V60c0-33.086-26.914-60-60-60H60C26.914 0 0 26.914 0 60v392c0 33.086 26.914 60 60 60h392c33.086 0 60-26.914 60-60zM455.26 32C466.694 32 480 45.305 480 56.74v398.52c0 11.435-13.305 24.74-24.74 24.74H56.74C45.306 480 32 466.695 32 455.26V56.74C32 45.306 45.305 32 56.74 32zM452 40"></path></svg>
        <span className="social-text hidden group-hover:block font-bold text-xl">LinkedIn</span>
      </Link>

      <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-link flex  items-center justify-center rounded-xl hover:shadow-xl h-12 w-12 group mx-4">
        <svg className="social-logo flex group-hover:hidden w-full h-full" aria-label="Resume icon" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M433.9 97.95L350 14.05c-9-9-21.2-14.1-33.9-14.1H112c-26.5.1-48 21.6-48 48.1v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-332.1c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H320v-95.5c2.8.7 5.3 2.1 7.4 4.2zM400 480.05H112c-8.8 0-16-7.2-16-16v-416c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z"></path></svg>
        <span className="social-text hidden group-hover:block font-bold text-xl">Resume</span>
      </Link>
      <Link href="mailto:kurtwensmann@gmail.com" className="social-link flex  items-center justify-center rounded-xl hover:shadow-xl h-12 w-12 group mx-4">
        <svg className="social-logo flex group-hover:hidden w-full h-full" aria-label="Email icon" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M464.004 4.326L15.986 262.714c-23 13.3-20.7 47.198 3.8 57.297l140.206 57.997v101.996c0 30.198 37.802 43.298 56.702 20.299l60.703-73.797L403.8 478.704c19.101 7.9 40.702-4.2 43.802-24.7l64.003-417.08c4.1-26.698-24.601-45.897-47.602-32.598zm-272.01 475.678v-88.796l54.501 22.499zm224.008-30.899l-206.208-85.196L409.302 128.12c4.8-5.6-2.9-13.199-8.5-8.4l-255.31 217.59-113.505-46.797L480.004 32.025z"></path></svg>
        <span className="social-text hidden group-hover:block font-bold text-xl">Email</span>
      </Link>
    </div>
  );
});

export default SocialLinks;
