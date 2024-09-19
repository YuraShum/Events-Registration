import React from 'react'
import ReturnLink from '../components/ui/ReturnLink'
import NewEventForm from '../components/NewEventForm'

const CreateEvent = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-custom text-center py-4'>Create new Event</h2>
            <ReturnLink />
            <NewEventForm/>
        </div>
    )
}

export default CreateEvent