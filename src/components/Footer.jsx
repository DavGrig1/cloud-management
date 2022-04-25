import React from 'react'

import { 
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaTwitter,
	FaTwitch,
} from 'react-icons/fa';

export const Footer = () => {
  return (
	<div className='w-full mt-24 bg-slate-900 text-gray-300 py-1 px-2'>
		<div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
			<div>
				<h6 className='font-bold uppercase pt-2'>Solutions</h6>
				<ul>
					<li className='py-1'>Marketing</li>
					<li className='py-1'>Analytics</li>
					<li className='py-1'>Commerce</li>
					<li className='py-1'>Data</li>
					<li className='py-1'>Cloud</li>
				</ul>
			</div>

			<div>
				<h6 className='font-bold uppercase pt-2'>Support</h6>
				<ul>
					<li className='py-1'>Pricing</li>
					<li className='py-1'>Documentation</li>
					<li className='py-1'>Guides</li>
					<li className='py-1'>API Status</li>
				</ul>
			</div>

			<div>
				<h6 className='font-bold uppercase pt-2'>Company</h6>
				<ul>
					<li className='py-1'>About</li>
					<li className='py-1'>Blogs</li>
					<li className='py-1'>Jobs</li>
					<li className='py-1'>Press</li>
					<li className='py-1'>Partners</li>
				</ul>
			</div>

			<div>
				<h6 className='font-bold uppercase pt-2'>Legal</h6>
				<ul>
					<li className='py-1'>Clains</li>
					<li className='py-1'>Privacy</li>
					<li className='py-1'>Terms</li>
					<li className='py-1'>Politics</li>
					<li className='py-1'>Conditions</li>
				</ul>
			</div>

			<div className='col-span-2 pt-8 md:pt-2'>
				<p className='font-bold uppercase'>Subscribe to our newsletter</p>
				<p className='py-4 '>The latest newws, articles, and resourses, sent to your inbox weekly</p>
				<form className='flex flex-col sm:flex-row'>
					<input className='w-full p-2 mr-4 rounded-md mb-4 text-black border-none' type="email" placeholder='Enter email...'/>
					<button className='p-2 mb-4'>Subscribe</button>
				</form>
			</div>

		</div>

		<div className='max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
			<p className='py-2'>2022 Workflow, LLC. ALl rights reserved</p>
			<div className='flex justify-between sm:w-[300px] pt-4 text-2xl mx-auto'>
				<FaFacebook/>
				<FaGithub/>
				<FaInstagram/>
				<FaTwitter/>
				<FaTwitch/>
			</div>
		</div>
	</div>
  )
}
