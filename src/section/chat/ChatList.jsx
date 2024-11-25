import { MagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'

export default function ChatList() {
  return (
    <div className='hidden h-full flex-col xl:flex xl:w-1/4'>
        <div className="flex flex-row sticky border-b border-stroke dark:border-stokedark px-6 py-7.5">
            <h3 className='text-lg font-medium text-black dark:text-white 2xl:text-xl'>
                Active Conversations
            </h3>
            <span className='rounded-md border-[.5px] border-stroke dark:border-strokedark bg-gray px-2 py-0.5 text-base font-medium text-black dark:bg-boxdark-2 dark:text-white 2xl:ml-4'>
                8
            </span>
        </div>
        <div className="flex max-h-full flex-col overflow-auto p-5">
            <form className='sticky mb-7'>
                <input type="text" placeholder='Search...' className='w-full rounded border border-stroke bg-gray-2 py-2.5 pl-5 pr-10 text-sm outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2' />
                <button className='absolute right-4 top-1/2 -translate-y-1/2'>
                    <MagnifyingGlass size={24} />
                </button>
            </form>
        </div>
    </div>
  )
}
