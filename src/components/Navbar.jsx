import LogoImg from "../assets/LOGO.png"
import { useState } from 'react'
import navOpenIcon from '../assets/navOpen.png'
import navCloseIcon from '../assets/navClose.png'

export const Navbar = () => {
    const [nav, setNav] = useState(true); {/* Produces two states of the navbar for us to manipulate*/}
  
  const toggleNav = () => {     {/* falsifies the true state of the nav to false i.e changes one state to another*/}
    setNav(!nav);
  };
  
  return (
    <div className="h-[250px] w-full flex justify-between items-center mb-2 border-gray-200 rounded-lg shadow-md z-20">
        {/* left div */}
        <div className="pt-20 pb-20 pl-40 z-20">
            <img src={LogoImg} className="h-[100px] w-[160px]"/>
        </div>

        {/* right div */}
        <div className='hidden lg:flex pr-80 gap-8 pt-20 items-center pb-[100px] z-20'> {/* the hamburger menu icon will display once the screen size becomes smaller than lg, above it, its hidden*/}
            <ul className='flex gap-12 pr-12 '>
                <li className='hover:cursor-pointer hover:text-gray-600 text-white font-semibold text-2xl'><a href="#aboutus">About Us</a></li>
                <li className='hover:cursor-pointer hover:text-gray-600 text-white font-semibold text-2xl'><a href="#services">Services</a></li>
                <li className='hover:cursor-pointer hover:text-gray-600 text-white font-semibold text-2xl'><a href="#form">Chat Form</a></li>
            </ul>
        </div>
        {/* Hamburger Nav's div*/}
        {/* Hamburger Nav icons styled*/}
        <div onClick={toggleNav} className="lg:hidden w-full flex justify-end z-20">
            {nav? <img src={navOpenIcon} className='h-[50px] w-[50px] bg-teal-400'/> : <img src={navCloseIcon} className="h-[30px] w-[30px] mr-2 bg-teal-400"/>}
        </div>

        {/* Dropdown menu styled */}
        <div className={nav? "hidden" : "w-1/5 h-fit absolute right-0 top-[45px] flex flex-col items-center pb-8 pt-20 z-20 bg-teal-500"}>
        <ul className="flex flex-col">
            <li className="hover:cursor-pointer hover:text-gray-600">
                <a href="#aboutus">About Us</a>
            </li>
            <li className='hover:cursor-pointer hover:text-gray-600'>
                <a href="#services">Services</a>
            </li>
            <li className='hover:cursor-pointer hover:text-gray-600'>Reviews</li>
            
            </ul></div>

        

    </div>
  )
}