import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
import { AuthContext } from '../Providers/AuthProvider';

const NavigationBar = () => {
  const {user,logOut} = useContext(AuthContext);
  console.log(user)
  // const {photoURL} = user;
    
  const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-gray-100 flex justify-between items-center p-5 rounded sm:max-w-xl md:max-w-full  md:px-24 lg:px-8'>
            {/* logo */}
            <Link to='/' className='inline-flex items-center relative navbar-start'>
                
                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>Cooking Alchemist</span>
            </Link>

            {/* navigation item */}
            <ul className='lg:flex space-x-8 items-center font-bold hidden navbar-center'>
                <li>
                    <NavLink to='/' 
                    title='Home'
                    className={({isActive}) => (isActive ? 'active' : 'default')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/blog' className={({isActive}) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                </li>
               
                
            </ul>
            <div className='nav-end font-bold flex items-center'>
              <span><img src={user?.photoURL} className='rounded-full w-1/2' alt="" /></span>
              
              {
                user ? <Link className='btn' onClick={logOut}>Sign out</Link>
                : <Link className='btn' to='/login'>Login</Link>

              }
                

            </div>

            {/* Mobile nav menu  */}
            
            <div className='lg:hidden'>
                        <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <HiBars3CenterLeft className='w-5 text-gray-600' />
                    </button>

                    {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                       Cooking Alchemist
                      </span>
                    </Link>
                  </div>
                 
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <HiOutlineXMark className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
               
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blog
                      </Link>
                    </li>
          
                    <li>
                      
                    </li>
                  </ul>
                  <div className='font-bold flex flex-col'>
                  
                  <span><img src={photoURL} className='rounded-full w-1/2' alt="" /></span>
                    {
                      user ? <Link className='btn w-1/5' onClick={logOut}>Sign out</Link> :
                      <Link className='btn w-1/5 mt-2' to='login'>Login</Link>
                    }
                  </div>
                </nav>
              </div>
            </div>
          )}

            </div>
        </div>
    );
                    }

export default NavigationBar;