import React from 'react'
import { XIcon } from '@heroicons/react/outline'

export const LogInPopup = (props) => {
  return (props.trigger) ? (
	 <div className='fixed top-0 left-0 w-full h-full bg-black/20 flex justify-center items-center z-10'>
		<div className='relative p-8 w-full max-w-[640px] bg-white rounded-md'>
			<button onClick={() => props.setTrigger(false)}>
				<XIcon className='w-8 h-8 bg-transparent transition-all 
										absolute text-black top-2 right-4 
										text-xl border rounded-[50%] font-bold 
										px-1 hover:text-white hover:bg-indigo-600'/>
			</button>

			<input className='w-full bg-zinc-900/10 border border-slate-400 rounded-md 
									p-2 mt-8 outline-none focus:border-slate-900' 
								type="email" placeholder='Email'/>
			<input className='w-full bg-zinc-900/10 border border-slate-400 rounded-md 
									p-2 mt-8 outline-none focus:border-slate-900' 
								type="password" placeholder='password'/>

			<button onClick={() => props.setTrigger(false)} className='bg-transparent w-full text-black px-8 
			py-2 mt-12 rounded-md hover:bg-indigo-600 hover:text-white'>Sign In</button>
		</div>

	 </div>
  ) : ''
}
