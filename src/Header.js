import React from 'react';
import useState from 'react';

function Header() {
      return (
    <>
    <div className="flex px-40 py-2 justify-between">
        <div className='flex'>
            <div className="w-10 h-10">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" placeholder="searchicon"></img>
            </div>
            <div className="mx-2">
                <input className='bg-gray-100 h-10 rounded mx-2 ' placeholder='  Search..'></input>
            </div>
        </div>
        <div className='flex justify-between w-1/2'>
            <div className='w-7 h-7 flex flex-col items-center'> 
                <img src="https://cdn-icons-png.flaticon.com/512/263/263115.png" placeholder="searchicon" className='w-6 h-6'></img>
                <div className='text-xs '>Home</div>
            </div>
            <div className='w-auto h-7 flex flex-col items-center'> 
                <img src="https://cdn-icons-png.flaticon.com/512/648/648324.png" placeholder="searchicon" className='w-6 h-6'></img>
                <div className='text-xs '>My Network</div>
            </div>
            <div className='w-auto h-7 flex flex-col items-center'> 
                <img src="https://cdn-icons-png.flaticon.com/512/1063/1063376.png" placeholder="searchicon" className='w-6 h-6'></img>
                <div className='text-xs '>Jobs</div>
            </div>
            <div className='w-auto h-7 flex flex-col items-center'> 
                <img src="https://cdn-icons-png.flaticon.com/512/589/589708.png" placeholder="searchicon" className='w-6 h-6'></img>
                <div className='text-xs '>Messages</div>
            </div>
            <div className='w-auto h-7 flex flex-col items-center'> 
                <img src="https://cdn-icons-png.flaticon.com/512/2529/2529521.png" placeholder="searchicon" className='w-6 h-6'></img>
                <div className='text-xs '>Notification</div>
            </div>
            <div className='w-auto h-7 flex flex-col items-center'> 
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" placeholder="searchicon" className='w-6 h-6'></img>
                <div className='text-xs '>Me</div>
            </div>
        </div>
    </div>
    <hr></hr>
    </>
    
  )
}

export default Header