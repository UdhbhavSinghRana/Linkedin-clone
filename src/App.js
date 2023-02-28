import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Content from './Content';
import { useState } from 'react';

function App() {
  return (
    <div className=''>
      <div className='flex justify-center'>
        <Header />
      </div>
      <div className='flex justify-center bg-zinc-100 h-full'>
      <div className='flex justify-between  w-4/5 py-5 '>
        <div className='w-1/5'>
          <Sidebar />
        </div>
        <div className='w-1/2'>
           <Content />
        </div>
        <div className='w-1/5'>
          end
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
