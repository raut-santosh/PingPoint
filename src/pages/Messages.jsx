import React from 'react'
import { ChatList, MessageInbox, Sidebar } from '../section/chat'
import GifModal from '../components/GifModal'
import VoiceRecorder from '../components/VoiceRecorder'
import MediaPicker from '../components/MediaPicker'
import DocumentPicker from '../components/DocumentPicker'

export default function Messages() {
  return (
    <div className='h-screen overflow-hidden'>
      <div className="h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex">
        {/* sidebar */}
        <Sidebar />
        
        {/* ChatList */}
        <ChatList />


        {/* Inbox */}
        <MessageInbox />
      </div>

      <GifModal />
      <VoiceRecorder />
      <MediaPicker />
      <DocumentPicker />
    </div>
  )
}
