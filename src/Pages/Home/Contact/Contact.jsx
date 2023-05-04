import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zzvhufj', 'template_fcuokhl', form.current, 'W7jPBdlhtE8V0jDOA')
          .then((result) => {
              console.log(result.text);
              toast.success('Feedback Sent!');

          }, (error) => {
              console.log(error.text);
          });
      };
    
    return (
       <>
        <div className=' w-1/2 bg-emerald-100 mx-auto mb-10 rounded '>
            <h2 className='text-center font-bold text-3xl text-emerald-600 mt-6 pt-4'>Contact Us</h2>
    

    <form ref={form} onSubmit={sendEmail} className="card-body p-6 lg:ms-52" >
                        <div className="form-control sm:w-full lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='from_name' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control sm:w-full lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='from_email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control sm:w-full lg:w-1/2 mr-2">
                            <label className="label">
                                <span className="label-text">Message: </span>
                            </label>
                            <textarea className='p-4' name="message" />
                        </div>
                        
                        <div className="form-control mt-6">
                        <input className='btn-primary w-1/2' type="submit" value="Send" />

                        </div>
                    </form>
        </div>
        <Toaster /></>
    );
};

export default Contact;