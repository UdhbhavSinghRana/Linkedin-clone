import React, { useState } from 'react';
import { useEffect } from 'react';
import Post from './Post';
import { db , auth } from './firebase';
import firebase from "firebase"; 
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

function Content() {
  const [img,setImg] = useState(null);
  const [text,setText] = useState('');
  const [Postx,setPostx] = useState([]);
  const user = useSelector(selectUser);
  
  useEffect(() => {
    db.collection("Postx")
    .orderBy("timestamp","desc")
    .onSnapshot((snapshot) => {
        setPostx(
            snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data:doc.data(),
                }
            ))
        )
    })
  },[]);

  console.log(Postx["id"]);
  const update = (e) => {
    e.preventDefault(); 
    if(text === '') return;
    db.collection("Postx").add({
        name: user.displayName,
        message: text,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        image:img,
    })
    setImg(null);
    setText('');
  }
  return (
    <div>
    <div className='flex flex-col justify-center border-2 md:rounded-xl bg-white  px-2 py-3'>
        <div className='flex    '>
            <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' className='h-12 py-1 px-2'></img>
            <form onSubmit={update} className="w-full">
                <input  value={text} placeholder="Start a post" className='h-12 rounded-full border-2 px-4 transition ease-in-out hover:bg-zinc-100 w-full' onChange={(e) =>{setText(e.target.value)}}>
                </input>
                <button className="rounded shadow-lg border-2 border-cyan-600 px-5 py-1.5 text-sm text-cyan-800 hover:bg-slate-100 hidden" type="submit"  ></button>
            </form>
        </div>
        <div>
        <div className='flex justify-between lg:justify-evenly pt-2'>
            <div className='lg:w-1/5 flex items-center text-sm hover:bg-zinc-100 h-12 hover:rounded-md transition ease-in-out '> 
                <label for="files">
                    <div className=' flex items-center  '>
                        <img src='https://cdn-icons-png.flaticon.com/512/5323/5323572.png' className='h-7 px-2'></img>
                        <p className='hidden lg:block'>Photo</p>
                    </div>
                </label>
                <input id="files" type="file" onChange={(e) =>   {setImg(URL.createObjectURL(e.target.files[0]))}} className="hidden" ></input>
            </div>
            <div className='lg:w-1/5 flex items-center text-sm hover:bg-zinc-100 h-12 hover:rounded-md transition ease-in-out'>
                <img src='https://cdn-icons-png.flaticon.com/512/4406/4406124.png' className='h-7 px-2  '></img>
                <p className='hidden lg:block'>Video</p>
            </div>
            <div className='lg:w-1/5 flex items-center text-sm hover:bg-zinc-100 h-12 hover:rounded-md transition ease-in-out'>
                <img src='https://cdn-icons-png.flaticon.com/512/3277/3277431.png' className='h-7 px-2  '></img>
                <p className='hidden lg:block'>Event</p>
            </div>
            <div className='w-1/5 lg:w-1/4 flex items-center text-sm hover:bg-zinc-100 h-12 hover:rounded-md transition ease-in-out'> 
                <img src='https://cdn-icons-png.flaticon.com/512/9791/9791745.png' className='h-7 px-2  '></img>
                <p className='hidden lg:block'>Write aritcle</p>
            </div>
        </div>
        </div>
    </div>
    <strong><hr className='my-4'></hr></strong>

    <div className='flex flex-col justify-center'> 
    {Postx.map(({id, data: {name,message,timestamp,image} }) =>(
        console.log(timestamp),
        <div className=' border-2 md:rounded-xl bg-white py-2 px-2 mt-4'>
        <Post
            key={id} 
            desc={message}
            Name={name}  
            photo={image}
        />
        </div>
    ))}     
    </div>

    </div>
  )
}

export default Content