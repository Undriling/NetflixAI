import React, { useEffect } from 'react'
import { Logo_URL } from '../constants';
import NetflixPofileImage from '../assets/netflixProfileImg.jpg'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const HeaderHome = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    };
   
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user.uid;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
              navigate("/browse")
            } else {
              // User is signed out
              dispatch(removeUser())
              navigate("/")
            }
          })

          return () => unsubscribe;
    },[]);

    
    return (
        <div className='w-full relative px-15 mx-15 py-3 z-10 bg-gradient-to-b from-black flex justify-between flex-wrap'>
            <img src={Logo_URL} alt='logo' className='w-[140px] cursor-pointer' />
            <div className='grid place-items-center w-auto h-10 mx-2'>
                <img src={NetflixPofileImage} alt='profile-image'className='w-10 h-10 rounded-md  cursor-pointer'/>
                <button className='font-serif font-light h-6 hover:bg-slate-400 my-[2px] rounded-lg' onClick={handleSignOut}>Sign out</button>
            </div>
        </div>
      )
}

export default HeaderHome;