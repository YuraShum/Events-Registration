import React, { useState } from 'react'
import getSourceColor from '../../utils/utils'

const ListenerItem = ({ listener }) => {

    return (
        <div className='flex flex-col gap-2 border-gray-400 border-2 p-4 rounded-lg'>
            <div>
                <h3 className='text-2xl font-bold'>{listener.fullname}</h3>
                <p className='text-lg opacity-75'>{listener.email}</p>
            </div>
            <span className='text-sm'>where did you find out about the event:</span>
            <p 
            className='w-fit py-1 px-2 rounded-lg'
            style={{backgroundColor: getSourceColor(listener.source)}}
            >{listener.source}</p>

        </div>
    )
}

export default ListenerItem