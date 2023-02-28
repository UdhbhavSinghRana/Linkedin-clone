import React, { useState } from 'react';
import { useEffect } from 'react';
import Post from './Post';
import { db , auth } from './firebase';
import firebase from "firebase"; 

function Content() {
  const [img,setImg] = useState(null);
  const [text,setText] = useState('');
  const [Postx,setPostx] = useState([]);
  
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
        name: "udhbhav",
        message: text,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        image:img,
    })
    setImg(null);
    setText('');
  }
  return (
    <div>
    <div className='flex flex-col justify-center border-2 rounded-xl bg-white py-2 px-2 '>
        <div className='flex'>
            <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' className='h-12 py-1 px-2'></img>
            <form onSubmit={update}>
                <input size={60} value={text} placeholder="Start a post" className='h-12 rounded-full border-2 px-4 transition ease-in-out hover:bg-zinc-100' onChange={(e) =>{setText(e.target.value)}}>
                </input>
                <button className="rounded shadow-lg border-2 border-cyan-600 px-5 py-1.5 text-sm text-cyan-800 hover:bg-slate-100 hidden" type="submit"  ></button>
            </form>
        </div>
        <div>
        <div className='flex justify-evenly pt-2'>
            <div className='w-1/5 flex items-center text-sm hover:bg-zinc-100 h-12 hover:rounded-md transition ease-in-out '> 
                <label for="files">
                    <div className=' flex items-center  '>
                        <img src='https://cdn-icons-png.flaticon.com/512/5323/5323572.png' className='h-7 px-2'></img>
                        Photo
                    </div>
                </label>
                <input id="files" type="file" onChange={(e) =>   {setImg(URL.createObjectURL(e.target.files[0]))}} className="hidden" ></input>
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
    <strong><hr className='my-4'></hr></strong>

    <div className='flex flex-col justify-center'> 
    {Postx.map(({id, data: {name,message,timestamp,image} }) =>(
        console.log(timestamp),
        <div className=' border-2 rounded-xl bg-white py-2 px-2 mt-4'>
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