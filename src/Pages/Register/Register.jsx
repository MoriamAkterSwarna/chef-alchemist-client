import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';


const Register = () => {
    const {createUser,handleName,} = useContext(AuthContext)
    const [error, setError] = useState('')
    const registerHandling = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email,photo,password)
        
        createUser(email,password)
    .then(result =>{
      const createdUser= result.user;
      console.log(createdUser)
    })
    .catch(error=>{
      setError(error.message)
    })

    }
    return (
        <div>
            <div className="hero bg-base-200 w-1/2 mx-auto mb-10 mt-4 p-4">
            <div className="hero-content flex-col ">
                <div className="text-center mb-4">
                    <h1 className="text-3xl font-bold title-text">Register</h1>
    
                </div>
                <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={registerHandling}>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-700 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-700">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-800 via-purple-600 to-pink-700"></span>
                                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-800 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                <span className="relative text-white">
                                Register</span></button>

                        
                        </div>
                    </form>
                    <span>{error}</span>
                    <p className='mb-4 ml-6'>
                    Already sign in? Please Login
                    <Link to='/login' className="label-text-alt link link-hover text-purple-700">
                        <span className='text-xl ml-1 font-bold'>Login</span>
                    </Link>
                    </p>

                    
                    </div>
            </div>
            </div>


        </div>
        
    );
};

export default Register;