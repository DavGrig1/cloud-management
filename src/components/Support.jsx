import React from 'react'
import {	PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';
import SupportImg from '../assets/support.jpg'

export const Support = () => {
  return (
	 <div name='support' className='w-full mt-24'>
		 <div className='w-full h-[700px] bg-gray-900/70 absolute'>
			<img className='w-full h-full object-cover mix-blend-overlay' src={SupportImg} alt="/" />
		 </div>

		 <div className='max-w-[1240px] mx-auto text-white relative'>
			 <div className='px-4 py-12'>
				 <h2 className='text-3xl pt-8 text-zinc-400 uppercase text-center'>Support</h2>
				 <h3 className='text-5xl font-bold py-6 text-center'>FInding the right team</h3>
				 <p className='py-4 text-3xl text-zinc-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
					 Laborum omnis eaque exercitationem minima quasi velit dolorum 
					 necessitatibus laboriosam totam, reiciendis magni,
					 sit eum, beatae neque pariatur. Et natus atque dolorem!</p>
			 </div>

			 <div className='grid lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-12 text-black'>
				 <div className='bg-white rounded-xl shadow-2xl '>
					<div className='p-8'>
						<PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] '/>
						<h3 className='font-bold text-2xl my-6'>Sales</h3>
						<p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
						 Impedit porro deserunt voluptas voluptatem ducimus qui, quisquam eos, 
						 cum enim vero eaque, exercitationem dolore! At, possimus.</p>

					</div>
					<div className='bg-zinc-100 pl-8 py-4'>
						<p className='flex items-center text-indigo-600'>Contact us <ArrowSmRightIcon className='w-5 ml-2 pt-1'/></p>
					</div>
				 </div>

				 <div className='bg-white rounded-xl shadow-2xl '>
					<div className='p-8'>
						<SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] '/>
						<h3 className='font-bold text-2xl my-6'>Technical support</h3>
						<p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						 Impedit porro deserunt voluptas voluptatem ducimus qui, quisquam eos, 
						 cum enim vero eaque, exercitationem dolore! At, possimus.</p>
					</div>
					<div className='bg-zinc-100 pl-8 py-4'>
						<p className='flex items-center text-indigo-600'>Contact us <ArrowSmRightIcon className='w-5 ml-2 pt-1'/></p>
					</div>
				 </div>

				 <div className='bg-white rounded-xl shadow-2xl '>
					<div className='p-8'>
						<ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] '/>
						<h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
						<p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						 Impedit porro deserunt voluptas voluptatem ducimus qui, quisquam eos, 
						 cum enim vero eaque, exercitationem dolore! At, possimus.</p>
					</div>
					<div className='bg-zinc-100 pl-8 py-4'>
						<p className='flex items-center text-indigo-600'>Contact us <ArrowSmRightIcon className='w-5 ml-2 pt-1'/></p>
					</div>
				 </div>

			 </div>

		 </div>
	 </div>
  )
}
