import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-[#131620] py-3 px-6 items-center'>
        <div className="logo">
            <Link href="/"><h1 className='text-white text-4xl font-bold '>GoLinks</h1></Link>
        </div>
        <ul className='flex justify-center items-center gap-3 text-white text-[15px]'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About us</li></Link>
            <Link href="/generate"><li>Generate</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            <li>
                <Link href="/"><button className='bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 text-center mx-2'>Try Now</button></Link>
                <Link href="/"><button className='bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 text-center mx-2'>Github</button></Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
