import React from 'react'
import ReturnLink from '../components/ui/ReturnLink'
import NewEventForm from '../components/NewEventForm'

const CreateEvent = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-custom text-center py-6'>Create new Event</h2>
            <ReturnLink />
            <div className='flex justify-center'>
            <NewEventForm/>
            </div>
        </div>
    )
}

export default CreateEvent