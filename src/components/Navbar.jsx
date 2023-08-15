import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {
  const [active,setActive] = useState('');
  const [toggle,setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 outline backdrop-filter backdrop-blur-lg`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={()=> {
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt="logo" className='w-11 h-11 object-contain rounded-full scale-110 bg-white'/>
          <p className='ml-1 text-white text-[20px] font-bold cursor-pointer flex'>KARTIK UPADHYAY</p>
        </Link>
        <ul className='list-none hidden md:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-amber-200" : "text-quater"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul> 
        {/* mobile devices menu bar */}
        <div className='md:hidden flex flex-1 justify-end items-center'>
              <img src={toggle ? close : menu} alt="menu" 
              className='w-[32px] h-[32px] object-contain cursor-pointer bg-white rounded-full'
              onClick={()=> setToggle(!toggle)}
              />

              <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-2xl border-2 bg-black-200`}>
                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                  {navLinks.map((link)=>(
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-amber-200" : "text-quater"
                      } hover:text-white font-poppins font-semibold cursor-pointer text-[19px]`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar