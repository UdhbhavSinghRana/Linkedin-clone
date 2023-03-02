import React, { useEffect } from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Content from './Content';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoURL
        }));
      }
      else{
        dispatch(logout());
      }
    }
    )
  },[])
  return (
    <div className=''>
      <div className='flex justify-center sticky top-0 bg-white '>
        <Header />
      </div>
        {!user ? (
          <Login />
        ) : (
        <div className='flex justify-center bg-zinc-100 h-full'>
        <div className=' md:flex md:justify-between  md:w-11/12 lg:w-4/5 py-5'>
          <div className='w-full lg:w-1/5 md:w-1/3 md:px-2'>
            <Sidebar />
          </div>
          <div className='w-full lg:w-1/2 md:w-3/4 '>
             <Content />
          </div>
          <div className='hidden lg:w-1/5 lg:block '>
            end
          </div>
        </div>
        </div>)}
      
      
    </div>
  );
}

export default App;
