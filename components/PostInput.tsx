'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { addDoc, arrayUnion, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { closeCommentModal, openLogInModal } from '@/redux/slices/modalSlices';

interface PostInputProps {
  insideModal?: boolean;
}

function PostInput({insideModal}: PostInputProps) {
  const [text, setText] = useState('');
  const user = useSelector((state:RootState) => state.user);
  const commentDetails = useSelector((state:RootState) => state.modals.commentPostDetails);
  const  dispatch = useDispatch();

  async function sendPost() {

    if(!user.userName){
      dispatch(openLogInModal())
      return
    }
   await  addDoc(collection(db, "posts"), {
      text: text,
      name: user.name,
      userName: user.userName,
      timestamp: serverTimestamp(),
      likes: [],
      comments: [],

    })
    setText('');
   
  }

  async function sendComment() {
    const postRef = doc(db, "posts", commentDetails.id);

    await updateDoc(postRef, {
      comments: arrayUnion({
        name : user.name,
        username: user.userName,
         
        text: text,

      })
    })

    setText('');
     dispatch(closeCommentModal());

  }
  return (
    <div className='flex space-x-5 p-3 border-b border-gray-100'>
      <Image
      src={insideModal ? "/assets/RajaramPhoto.png" :'/assets/Explorin.jpeg'}
      width={44}
      height={44}
      alt={insideModal ? "Rajaram" : "Explorin"}
      className='w-11 h-11 z-10'/>

      <div className='w-full'>
        <textarea className='resize-none outline-none w-full min-h-[50px] text-lg'
        placeholder={insideModal ? "Send your reply" : "What's happening!?"}
        onChange={(event) => setText(event.target.value)} value={text}
        />

        <div className='flex justify-between pt-5 border-t border-gray-100'>
            <div className='flex space-x-1.5'>
                <PhotoIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
                 <ChartBarIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
                  <FaceSmileIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
                   <CalendarIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
                    <MapPinIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
            </div>
            <button className="bg-[#F4AF01] w-[80px] h-[36px] rounded-full text-white  cursor-pointer text-sm disabled:bg-orange-200"
            disabled= {!text}
            onClick={() => insideModal ? sendComment() :sendPost()}>Bumble</button>
        </div>
      </div>
    </div>
  )
}

export default PostInput
