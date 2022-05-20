import React, { useState } from 'react'
import {Link, animateScroll as scroll } from 'react-scroll'


import {MenuIcon, XIcon} from '@heroicons/react/outline'

export const Navbar = (props) => {
	const [nav, setNav] = useState(false)
	const handleClick = () => setNav(!nav)
	const handleClose = () => setNav(!nav)

  return (
	<div className='w-screen h-[70px] z-10 bg-slate-300 fixed drop-shadow-lg'>
		<div className='px-2 flex justify-between items-center w-full h-full'>
			<div className='flex items-center'>
				<h1 className='text-3xl font-bold mr-6 md:text-4xl'>BRAND</h1>
				<ul className='hidden md:flex'>
					<li className=' text-lg cursor-pointer'>
						<Link to='home' smooth={true} duration={500}>Home</Link>
					</li>
					<li className=' text-lg cursor-pointer'>
						<Link to='about' smooth={true} offset={-200} duration={500}>About</Link>
					</li>
					<li className=' text-lg cursor-pointer'>
						<Link to='support' smooth={true} offset={-50} duration={500}>Support</Link>
					</li>
					<li className=' text-lg cursor-pointer'>
						<Link to='platforms' smooth={true} offset={-100} duration={500}>Platforms</Link>
					</li>
					<li className=' text-lg cursor-pointer'>
						<Link to='pricing' smooth={true} offset={-50} duration={500}>Pricing</Link>
					</li>
				</ul>
			</div>
			<div className='hidden md:flex pr-4'>
				<button onClick={()=> props.setTrigger(true)} className='border-none bg-transparent text-black px-5 mr-4 rounded-md
										 hover:bg-indigo-600 hover:text-white'>Sign In</button>
				<button onClick={()=> props.setTrigger(true)} className='px-5 py-2'>Sign Up</button>
			</div>
			<div className='md:hidden mr-4' onClick={handleClick}>
				{!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
			</div>
		</div>
		<div className='md:hidden'>
			<ul className={! nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
				<li className='border-b-2 border-slate-300 w-full cursor-pointer'>
					<Link onClick={handleClose} to='home' smooth={true} duration={500}>Home</Link>
				</li>
				<li className='border-b-2 border-slate-300 w-full cursor-pointer'>
					<Link onClick={handleClose} to='about' smooth={true} offset={-200} duration={500}>About</Link>
				</li>
				<li className='border-b-2 border-slate-300 w-full cursor-pointer'>
					<Link onClick={handleClose} to='support' smooth={true} offset={-50} duration={500}>Support</Link>
				</li>
				<li className='border-b-2 border-slate-300 w-full cursor-pointer'>
					<Link onClick={handleClose} to='platforms' smooth={true} offset={-100} duration={500}>Platforms</Link>
				</li>
				<li className='border-b-2 border-slate-300 w-full cursor-pointer'>
					<Link onClick={handleClose} to='pricing' smooth={true} offset={-50} duration={500}>Pricing</Link>
				</li>

				<div className='flex flex-col my-4'>
					<button onClick={()=> {
						return props.setTrigger(true), handleClose()
					}} className='bg-transparent text-black px-8 py-2 mb-4 rounded-sm
											 hover:bg-indigo-600 hover:text-white '>Sign In</button>
					<button onClick={()=> {
						return props.setTrigger(true), handleClose()
					}} className=' px-8 py-2 mb-4 rounded-sm'>Sign Out</button>
				</div>
				
			</ul>
		</div>
	</div>
  )
}