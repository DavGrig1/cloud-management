import React from 'react'
import { 
	CloudUploadIcon,
	DatabaseIcon,
	PaperAirplaneIcon,
	ServerIcon
} from '@heroicons/react/solid'
import bgImg from '../assets/cyber-bg.png'


export const Home = () => {
  return (
	 <div name='home' className='w-full h-screen bg-slate-200 flex flex-col justify-between'>
		 <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
			 <div className='flex flex-col justify-center md:items-start w-full px-2 py-2'>
				 <p className='text-2xl'>Unique Sequencing & Production</p>
				 <h1 className='text-5xl py-3 md:text-7xl font-bold'>Cloud Management</h1>
				 <p className='text-2xl'>This is our Tech brand.</p>
				 <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
			 </div>
			 <div>
				 <img className='w-full' src={bgImg} alt="/" />
			 </div>
			 <div className='absolute flex flex-col 
			 						py-8 md:min-w-[760px] bottom-[5%] 
									mx-1 md:left-1/2 transform 
									md:-translate-x-1/2 bg-slate-200 border border-zinc-300 
									rounded-xl text-center shadow-xl'>
				 <p>Data Services</p>
				 <div className='flex z-1 justify-between flex-wrap px-4'>
					 <p className='flex px-4 py-2 text-slate-500 w-1/2'><CloudUploadIcon className='h-6 text-indigo-600' />App Security</p>
					 <p className='flex px-4 py-2 text-slate-500 w-1/2'><DatabaseIcon className='h-6 text-indigo-600'/>Dashboard Design</p>
					 <p className='flex px-4 py-2 text-slate-500 w-1/2'><ServerIcon className='h-6 text-indigo-600'/>Cloud Data</p>
					 <p className='flex px-4 py-2 text-slate-500 w-1/2'><PaperAirplaneIcon className='h-6 text-indigo-600'/>API</p>
				 </div>
			 </div>
		 </div>
	 </div>
  )
}
