import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Content from './Content';
function App() {
  return (
    <div className=''>
      <div className='flex justify-center'>
        <Header />
      </div>
      <div className='flex justify-center bg-zinc-100 h-full'>
      <div className='flex justify-between  w-4/5 py-5'>
        <div >
          <Sidebar />
        </div>
        <div>
           <Content />
        </div>
        <div>
          end
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
