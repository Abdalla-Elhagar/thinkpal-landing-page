import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav className='centralize-content gap-10 text-lg font-semibold'>
        <li><Link href={"#"}>Home</Link></li>
        <li><Link href={"#"}>Features</Link></li>
        <li><Link href={"#"}>About</Link></li>
        <li><Link href={"#"}>Contact</Link></li>
    </nav>
  )
}

export default NavBar