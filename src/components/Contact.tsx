// const Contact = () => {
//     return (
//         <div className="bg-walnutLight w-full">
//             <section id="contact" className="mx-4 p-4 justify-center items-center flex flex-col max-w-7xl mt-16">
//                 <h2>Contact</h2>
                
//             </section>

//         </div>
//     )
// }

// export default Contact


import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [result, setResult] = useState("");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_jn9o0bn', 'template_ma5gnao', e.target as HTMLFormElement, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                setResult("Email successfully sent!");
            }, (error) => {
                console.log(error.text);
                setResult("An error occurred, please try again.");
            });
    }

    return (
        <div className="bg-walnutLight w-full">
            <section id="contact" className="mx-4 p-4 justify-center items-center flex flex-col max-w-7xl mt-16">
                <h2>Contact</h2>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
                <div>{result}</div>
            </section>
        </div>
    )
}

export default Contact;