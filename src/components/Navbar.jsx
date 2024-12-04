"use client"

import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import ThemeToggle from './themeToggle'
import LinkSocial from './LinkSocial'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(()=>{
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    };
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3] text-[#1f2937] dark:bg-gray-900 dark:text-white' : 'fixed w-full h-20 z-[100] bg-[#ecf0f3] text-[#1f2937] dark:bg-gray-900 dark:text-white'}>
      <div className="max-w-[1240px] mx-auto flex justify-between items-center w-full px-5">
        <Link to="/">
          <img src="/assets/logo.png" alt="Image" width="60" height="60" />
        </Link>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex">
              <Link to="/">
                <li className="ml-10 text-sm uppercase hover:border-b hover:border-blue-500">
                  Home
                </li>
              </Link>
              <Link to="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b hover:border-blue-500">
                  About
                </li>
              </Link>
              <Link to="/#skill">
                <li className="ml-10 text-sm uppercase hover:border-b hover:border-blue-500">
                  Skill
                </li>
              </Link>
              <Link to="/#project">
                <li className="ml-10 text-sm uppercase hover:border-b hover:border-blue-500">
                  Project
                </li>
              </Link>
              <Link to="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b hover:border-blue-500">
                  Contact
                </li>
              </Link>
            </ul>
            <ThemeToggle />
            <div onClick={handleNav} className="cursor-pointer md:hidden">
              <FiMenu size={25}/>
            </div>
          </div>
        </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden' : ''}>
        <div className={nav 
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-gray-900 p-6 ease-in duration-300 md:hidden'
          : 'fixed left-[-100%] top-0 p-6 ease-in duration-300'}>
          <div>
            <div className="flex w-full items-center justify-between">
              <Link to="/" onClick={() => setNav(false)}>
                <img src="/assets/logo.png" alt="image" width="70" height="70" />
              </Link>
              <div onClick={handleNav} className="rounded-full cursor-pointer p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Menu</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link onClick={() => setNav(false)} href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#skill">
                <li className="py-4 text-sm">Skill</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#project">
                <li className="py-4 text-sm">Project</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-32 pb-5">
              <p className="uppercase tracking-widest text-[#5651e5]">Social media</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <LinkSocial icon={<FaLinkedinIn />} url="https://linked.in" />
                <LinkSocial icon={<FaGithub />} url="https://github.com" />
                <LinkSocial icon={<AiOutlineMail />} url="https://gmail.com" />
                <LinkSocial icon={<FaInstagram />} url="https://instagram.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar