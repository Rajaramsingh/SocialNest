import LoadingScreen from '@/components/LoadingScreen'
import CommentModal from '@/components/modals/CommentModal'
import PostFeed from '@/components/PostFeed'
import Sidebar from '@/components/Sidebar'
import SignupPrompt from '@/components/SignupPrompt'
import Widgets from '@/components/Widgets'
import React from 'react'

function Home() {
  return (
    <>
    <div className="text-[#0F1419] min-h-screen  max-w-[1400px] mx-auto flex justify-center ">
        <Sidebar/>
        <PostFeed/>
        <Widgets/>

    </div>
    <CommentModal/>
    <SignupPrompt/>
    <LoadingScreen/>
    </>
  )
}

export default Home;
