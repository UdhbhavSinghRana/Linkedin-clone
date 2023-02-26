import React from 'react'

function content() {
  return (
    <div className='flex flex-col justify-center border-2 rounded-xl bg-white py-2 px-2 '>
        <div className='flex'>
            <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' className='h-12 py-1 px-2'></img>
            <input size={60} placeholder="Start a post" className='h-12 rounded-full border-2 px-4 transition ease-in-out hover:bg-zinc-100'>
            </input>
        </div>
        <div>
        <div className='flex justify-evenly pt-2'>
            <div className='w-1/5 flex items-center text-sm hover:bg-zinc-100 h-12 hover:rounded-md transition ease-in-out '>
                <img src='https://cdn-icons-png.flaticon.com/512/4194/4194687.png' className='h-7 px-2  '></img>
                Photo
            </div>
            <div className='w-1/5 flex items-center text-sm hover:bg-zinc-100 h-12 hover:rounded-md transition ease-in-out'>
                <img src='https://cdn-icons-png.flaticon.com/512/4406/4406124.png' className='h-7 px-2  '></img>
                Video
            </div>
            <div className='w-1/5 flex items-center text-sm hover:bg-zinc-100 h-12 hover:rounded-md transition ease-in-out'>
                <img src='https://cdn-icons-png.flaticon.com/512/9683/9683355.png' className='h-7 px-2  '></img>
                Event
            </div>
            <div className='w-1/4 flex items-center text-sm hover:bg-zinc-100 h-12 hover:rounded-md transition ease-in-out'> 
                <img src='https://cdn-icons-png.flaticon.com/512/9791/9791745.png' className='h-7 px-2  '></img>
                Write article
            </div>
        </div>
        </div>
    </div>
  )
}

export default content