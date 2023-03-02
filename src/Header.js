import React from 'react';
import useState from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './features/counter/userSlice';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch();
    const logoutapp = () =>{
        dispatch(logout());
        auth.signOut();
    }
      return (
    <>
    <div className="px-4 w-full py-2 flex justify-between lg:flex md:py-2 lg:justify-between shadow-sm lg:w-4/5">
        <div className='flex md:justify-start md:w-1/4 lg:w-1/3 w-full'>
            <div className="w-10 h-10 py-2">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" placeholder="searchicon"></img>
            </div>
            <div className="mx-2 w-full lg:w-full">
                <input className='bg-gray-100 h-10 rounded mx-2 w-full lg:w-full' placeholder='  Search..' ></input>
            </div>
        </div>
        <div className='hidden md:flex lg:justify-between lg:w-2/5 md:w-full md:justify-around'>
            <div className='w-7 h-7 flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'> 
                <img src="https://cdn-icons-png.flaticon.com/512/263/263115.png" placeholder="searchicon" className='w-6 h-6 '></img>
                <div className='text-xs '>Home</div>
            </div>
            <div className='w-auto h-7 flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' > 
                <img src="https://cdn-icons-png.flaticon.com/512/648/648324.png" placeholder="searchicon" className='w-6 h-6 '></img>
                <div className='text-xs '>My Network</div>
            </div>
            <div className='w-auto h-7 flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' > 
                <img src="https://cdn-icons-png.flaticon.com/512/1063/1063376.png" placeholder="searchicon" className='w-6 h-6 '></img>
                <div className='text-xs '>Jobs</div>
            </div>
            <div className='w-auto h-7 flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' > 
                <img src="https://cdn-icons-png.flaticon.com/512/589/589708.png" placeholder="searchicon" className='w-6 h-6 '></img>
                <div className='text-xs '>Messages</div>
            </div>
            <div className='w-auto h-7 flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' > 
                <img src="https://cdn-icons-png.flaticon.com/512/2529/2529521.png" placeholder="searchicon" className='w-6 h-6 '></img>
                <div className='text-xs '>Notification</div>
            </div>
            <button onClick={logoutapp} className=' w-auto h-7 flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' > 
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" placeholder="searchicon" className='w-6 h-6 '></img>
                <div className='text-xs '>Me</div>
            </button>
        </div>
    </div>

    </>
    
  )
}

export default Header