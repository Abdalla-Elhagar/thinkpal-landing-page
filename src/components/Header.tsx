"use client"
import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import MyButton from './MyButton';

function Header() {
  return (
    <header className='shadow'>
        <div className="container flex justify-between items-center h-[72px] w-full">
            <Logo />
            
            {/* Navbar */}
            <NavBar />

            {/* start button */}

            
            <MyButton text="Start Your Journey" onClick={()=>console.log("Clicked")} textColor="black" bgColor="var(--main-color)" />

        </div>
    </header>
  )
}

export default Header