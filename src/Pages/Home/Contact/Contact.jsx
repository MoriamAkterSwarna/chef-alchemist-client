import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zzvhufj', 'template_fcuokhl', form.current, 'W7jPBdlhtE8V0jDOA')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return (
        <div className='h-[70vh] w-1/2 bg-purple-200 mx-auto mb-10 rounded'>
            <h2 className='text-center font-bold text-3xl text-purple-600 mt-4'>Contact Us</h2>
    <form ref={form} onSubmit={sendEmail} className='p-6'>
      <label>Name: </label>
      <input type="text" name="from_name" />
      <br /> <br />
      <label >Email: </label>
    <input type="email" name="from_email" />
    <br /> <br />
      <label>Message: </label>
      <textarea className='p-4' name="message" /> <br /><br />
      <input className='btn-primary' type="submit" value="Send" />
    </form>
        </div>
    );
};

export default Contact;