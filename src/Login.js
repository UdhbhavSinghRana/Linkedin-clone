
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';
import { auth } from './firebase';

function Login() {
  const [email,setEmail] = useState('');
  const [photo,setPhoto] = useState('');
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch();

  const logintoApp = (e) => {
    e.preventDefault(); 
    auth.
    signInWithEmailAndPassword(email,password)
    .then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName:userAuth.user.displayName,
          photoURL:userAuth.user.photoURL
        })
      )
    }).catch(error => alert(error));
  }
  const register = () => {
    if(!name) return alert("Please enter name")

    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth) => {
      userAuth.user.
      updateProfile({
        displayName: name,
        photoURL: photo,
      })
    .then(() => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName:name,
        photoURL:photo
      }))
    })
    }).catch(error => alert(error))
  }
  return (
    <div className='flex justify-center w-full h-2/3 absolute items-center bg-zinc-100'>
        <div className='flex flex-col items-center'>
            <div>
                <img src='https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-16.png' className='w-60'></img>
            </div>
            <form>
              <div><input size={30} placeholder="Full Name (required if registering)" className='px-4 py-2 my-2 border-2 border-black rounded-md' value={name} onChange={(e) =>{setName(e.target.value)}}></input></div>
              <div><input size={30} placeholder="Profile Pic URL" className='px-4 py-2 my-2 border-2 border-black rounded-md' value={photo} onChange={(e) =>{setPhoto(e.target.value)}}></input></div>
              <div><input size={30} placeholder="Email" className='px-4 py-2 my-2 border-2 border-black rounded-md' type="email" value={email} onChange={(e) =>{setEmail(e.target.value)}}></input></div>
              <div><input size={30} type="password" placeholder="Password" className='px-4 py-2 my-2 border-2 border-black rounded-md' value={password} onChange={(e) =>{setPassword(e.target.value)}}></input></div>
              <div className='w-full '><button className='bg-blue-600 py-2 my-2 w-full text-center rounded-md text-white hover:bg-blue-500' onClick={logintoApp}>Sign in</button></div>
            </form>
            <span>Not a member? <button className='text-blue-500' onClick={register}>Register now</button></span>

        </div>
    </div>
  )
}
export default Login;