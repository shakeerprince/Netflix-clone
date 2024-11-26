import { signOut, onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { addUser, removeUser} from "../utils/userSlice"
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)

  
  const handleSignOut = ()=>{
    signOut(auth).then(()=>{
      //Sign out Successfully
      navigate("/")
    }).catch((error)=>{ 
      //An error happened
      navigate("/error")
    })
  } 

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL }))
        // ...
       navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
        
      }
    });

    return ()=> unsubscribe();
  },[dispatch, navigate])
  return (
    <div className='absolute w-full p-x8 p-y2 bg-gradient-to-b from-black z-10 flex justify-between'>
        
        <img 
        className='w-44'
        src={LOGO}
        alt="LOGO"
        />
        
       { user && (<div className='flex p-2'>
          <img
          className='w-12 h-12 '
          alt='User Avatar'
          src={user?.photoURL}
          />
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
        </div>
)}
    </div>
  )
}

export default Header;