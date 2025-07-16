"use client"
import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import MyButton from './MyButton';
import MobileNavBar from './MobileNavBar';

function Header() {
  return (
    <header className='shadow'>
        <div className="container flex justify-between items-center h-[72px] w-full">
          {/* Logo */}
            <Logo />
            
            {/* Navbar */}
            <NavBar styles='hidden lg:flex gap-10 text-lg' />

            {/* start button */}
            <MyButton styles='hidden lg:flex' text="Start Your Journey" onClick={()=>console.log("Clicked")} textColor="black" bgColor="var(--main-color)" />


            {/* mobileNav */}
            <MobileNavBar styles='lg:hidden flex' />


            
        </div>
    </header>
  )
}

export default Header