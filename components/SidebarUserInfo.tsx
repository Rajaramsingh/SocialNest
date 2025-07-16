"use client";
import React from "react";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { clearScreenDown } from "readline";
import { closeLogInModal, closeSignUpModal } from "@/redux/slices/modalSlices";

function SidebarUserInfo() {
  const dispatch:AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  async function handleSignOut() {
    await signOut(auth);
    
    dispatch(signOutUser());
    dispatch(closeSignUpModal())
    dispatch(closeLogInModal())  
  }
  return (
   
      <div className="absolute bottom-3 flex items-center space-x-2 justify-start hover:bg-gray-200 xl:p-3 xl:pe-6 hover:bg-opacity-10 rounded-full transition cursor-pointer w-fit xl:w-[240px]"
      onClick={() => handleSignOut()}>
        <Image
          src={"/assets/RajaramPhoto.png"}
          height={36}
          width={36}
          alt="profile photo"
          className="w-9 h-9"
        />
        <div className="hidden xl:flex  flex-col text-sm max-w-40">
          <span className="whitespace-nowrap font-bold text-ellipsis overflow-hidden">{user.name}</span>
          <span className="text-gray-500 whitespace-nowrap text-ellipsis overflow-hidden">@{user.userName}</span>
        </div>
      </div>
    
  );
}

export default SidebarUserInfo;
