import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'

export default function Sidebar() {
  const user = useSelector(selectUser);
  return (
    <div className='lg:sticky top-20'>
    <div className='flex flex-col  shadow-md rounded-b-lg rounded-t-lg bg-white'>
    <div className=" flex flex-col items-center border-b-2 border-slate-100 rounded-t-lg ">
        <div className='-mb-10 w-full'><img src='https://media.istockphoto.com/id/1179822347/photo/watercolor-painting-background.jpg?b=1&s=170667a&w=0&k=20&c=pNNHX92Y_xhw-xd0YFPJyI60q-EAICkr73_RXzKNBXM=' className='md:rounded-t-lg lg:rounded-t-lg h-20 lg:w-96 w-full '></img></div>
        <div className='w-16'><img src='https://cdn-icons-png.flaticon.com/512/149/149071.png'></img></div>
        <div className='text-lg mt-2 font-semibold'><h1>{user.displayName}</h1></div>
        <div className='text-sm text-zinc-400 mb-3 font-light '>{user.email}</div>
    </div >
        <div>
            <div className='mx-2 mt-5 text-sm text-zinc-400 font-medium'>
                Who viewed you
            </div>
            <div className='mx-2 mt-2 mb-2 text-sm text-zinc-400 font-medium'>
                Views on post
            </div>
        </div>
    </div>
    <div className='flex flex-col  shadow-md rounded-b-lg rounded-t-lg my-2 bg-white'>
        <div className='rounded-t-lg border-t-2'> 
        <div className='text-md  px-2 py-2 font-semibold text-zinc-500'> 
            Recent
        </div>
        <div className='flex flex-col justify-between h-40 px-2 font-semibold text-zinc-400 text-sm mb-4 '>
        <div className='text-md px-2 hover:text-zinc-500'> 
            # reactjs
        </div>
        <div className='text-md px-2 hover:text-zinc-500'> 
            # programming
        </div>
        <div className='text-md px-2 hover:text-zinc-500'> 
            # design
        </div>
        <div className='text-md px-2 hover:text-zinc-500'> 
            # devloper
        </div>
        <div className='text-md px-2 hover:text-zinc-500'> 
            # software
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}
