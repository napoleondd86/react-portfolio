

import React, { ForwardedRef, useEffect } from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import SocialLinks from './SocialLinks';
// import Footer from './Footer';

const Contact = React.forwardRef(({ }, ref: ForwardedRef<HTMLDivElement>) => {
    const [result, setResult] = useState("");

    useEffect(() => {
        // intialize emailjs
        emailjs.init("ckB0XAhgG8gqguVtO");
    }, []);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // emailjs.sendForm('service_jn9o0bn', 'template_ma5gnao', e.target as HTMLFormElement, 'YOUR_USER_ID')
        emailjs.sendForm('service_jn9o0bn', 'template_ma5gnao', e.target as HTMLFormElement, 'ckB0XAhgG8gqguVtO')
            .then((result) => {
                console.log(result.text);
                setResult("Email successfully sent!");
            }, (error) => {
                console.log(error.text);
                setResult("An error occurred, please try again.");
            });
    }

    return (
        <div id="contact" ref={ref} className=" grid items-center justify-center bg-walnutDark text-birch w-full pt-20 ">
            <div className='max-w-7xl'>
                <h2>Contact</h2>
                <div className='mt-8 gap-4 flex flex-col md:items-start p-4 w-full md:w-9/12 w-max-3xl'>
                    <h3 className='text-3xl font-semibold'>Connect with me</h3>
                    <p className='text-left'>If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you!</p>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <section id="contact" className="p-4 justify-center items-center flex md:w-6/12 gap-4">
                        <form className="contact-form flex flex-col gap-8 w-full" onSubmit={sendEmail}>
                            <input className='rounded-lg text-black focus:border-secondaryOrange focus:border-4' type="text" name="user_name" id='user_name' placeholder='Name' />
                            <input className='rounded-lg text-black focus:border-secondaryOrange focus:border-4' type="email" name="reply_to" id='reply_to' placeholder='Email'/>
                            <textarea className='rounded-lg bg-background text-black focus:border-secondaryOrange focus:border-4' name="message" id='message' placeholder='Message' rows={8} />
                            <input className='rounded-lg border-2 border-secondaryOrange bg-walnutLight hover:border-walnutDark active:text-white' type="submit" value="Send" />
                        </form>
                        <div>{result}</div>
                    </section>
                    <div className='flex flex-col md:w-6/12 py-4 md:pr-16 gap-8'>
                        <div className='flex flex-col  md:items-end gap-4 md:pr-8'>
                            <h3 className='text-3xl font-semibold'>My Home</h3>
                            <p>Devils Lake, North Dakota</p>
                        </div>
                        <div className='flex flex-col  md:items-end  gap-4'>
                            <h3 className='text-3xl font-semibold mb-4 md:pr-8'>Socials</h3>
                            <SocialLinks className="text-secondaryOrange"/>
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}

            </div>
        </div>
    )
})

export default Contact;