import { Link } from "react-aria-components";
import '../animation.css'
import Sawblade from "../assets/sawblade.svg?react";

<Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link flex flex-col items-center justify-center h-12 w-12 group mx-4 text-center rounded-full">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 transition-opacity opacity-100 group-hover:opacity-0">
            <svg className="social-logo flex group-hover:hidden w-full h-full" aria-label="GitHub icon" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M296.133 354.174c49.885-5.891 102.942-24.029 102.942-110.192 0-24.49-8.624-44.448-22.67-59.869 2.266-5.89 9.515-28.114-2.734-58.947 0 0-18.139-5.898-60.759 22.669-18.139-4.983-38.09-8.163-56.682-8.163-19.053 0-39.011 3.18-56.697 8.163-43.082-28.567-61.22-22.669-61.22-22.669-12.241 30.833-4.983 53.057-2.718 58.947-14.061 15.42-22.677 35.379-22.677 59.869 0 86.163 53.057 104.301 102.942 110.192-6.344 5.452-12.241 15.873-14.507 30.387-12.702 5.438-45.808 15.873-65.758-18.592 0 0-11.795-21.31-34.012-22.669 0 0-22.224-.453-1.813 13.592 0 0 14.96 6.812 24.943 32.653 0 0 13.6 43.089 76.179 29.48v38.543c0 5.906-4.53 12.702-15.865 10.89C96.139 438.977 32.2 354.626 32.2 255.77c0-123.807 100.216-224.022 224.03-224.022 123.347 0 224.023 100.216 223.57 224.022 0 98.856-63.946 182.754-152.828 212.688-11.342 2.266-15.873-4.53-15.873-10.89V395.45c.001-20.873-6.811-34.465-14.966-41.276zM512 256.23C512 114.73 397.263 0 256.23 0 114.73 0 0 114.73 0 256.23 0 397.263 114.73 512 256.23 512 397.263 512 512 397.263 512 256.23z"></path></svg>
          </div>
          <div className="sawblade-logo absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100">
            <Sawblade className="" />
          </div>
          {/* <span className="social-text mt-2 hidden group-hover:block  font-bold text-xl ">GitHub</span> */}
        </div>
        <div className="sawdust-animation">
          {/* Multiple divs for sawdust or pebbles */}
          <div className="pebble" style={{animationDelay: '0s', left: '10%'}}></div>
          <div className="pebble" style={{animationDelay: '0.5s', right: '5px'}}></div>
          <div className="pebble" style={{animationDelay: '1s', left: '10px'}}></div>
          <div className="pebble" style={{animationDelay: '1.6s', right: '8px'}}></div>
          <div className="pebble" style={{animationDelay: '2s', left: '15px'}}></div>
          <div className="pebble" style={{animationDelay: '2.4s', right: '10px'}}></div>
          <div className="pebble" style={{animationDelay: '2.8s', left: '18px'}}></div>
          <div className="pebble" style={{animationDelay: '3.2s', right: '14px'}}></div>
          <div className="pebble" style={{animationDelay: '3.5s', left: '24px'}}></div>
          <div className="pebble" style={{animationDelay: '3.9s', right: '18px'}}></div>
          <div className="pebble" style={{animationDelay: '4.2s', left: '30px'}}></div>
          <div className="pebble" style={{animationDelay: '4.6s', right: '23px'}}></div>
         
        </div>
      </Link>