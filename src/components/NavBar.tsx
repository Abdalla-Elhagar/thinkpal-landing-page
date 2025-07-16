"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

interface navLinksTypes {
  name: string;
  link: string;
}

export const navLinks:navLinksTypes[] = [
  {
  name: 'Home',
  link: '#'
},
{
  name: 'Features',
  link: '#'
},
{
  name: 'About',
  link: '#'
},
{
  name: 'Contact',
  link: '#'
},]

function NavBar({styles}:{styles:string}) {

  return (
    <nav className={`${styles} lg:centralize-content font-semibold `}>
      {navLinks.map((ele:navLinksTypes, index:number)=>(
        <motion.li  whileHover={{scale: 1.1}} transition={{duration: 0.3}} key={index}><Link href={ele.link}>{ele.name}</Link></motion.li>
      ))}
    </nav>
  )
}

export default NavBar