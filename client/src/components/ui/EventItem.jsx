import React from 'react'
import { readableTime } from '../../utils/utils'
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineAppRegistration } from "react-icons/md";

const EventItem = ({ event }) => {


    return (
        <div className='flex flex-col gap-5 border-gray-400 border-2 p-4 rounded-lg text-white justify-between'>
            <div className=''>
                <h2 className='text-xl font-bold'>{event.title}</h2>
                <div className='flex gap-2 items-center opacity-75'>
                    <IoPersonCircleSharp className='w-6 h-6' />
                    <p >{event.organizer}</p>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-sm'>{event.description}</p>
                <p className='opacity-75 text-sm'>{readableTime(event.eventDate)}</p>
            </div>
            <div className='flex justify-between items-center'>
                <a
                    href={`/events/${event._id}/register`}
                    className='flex items-center gap-[1px] bg-link hover:bg-orange-400 p-1 rounded-lg cursor-pointer duration-500 hover:translate-y-[-2px]'>
                    <MdOutlineAppRegistration />
                    Register
                </a>
                <a
                    href={`/events/${event._id}/participats`}
                    className='underline cursor-pointer duration-500 hover:translate-y-[-2px]'>
                    View
                </a>
            </div>
        </div>
    )
}

export default EventItem