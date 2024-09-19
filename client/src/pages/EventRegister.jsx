import React, { useEffect, useState } from 'react'
import RegisterForm from '../components/RegisterForm';
import ReturnLink from '../components/ui/ReturnLink';
import { useParams } from 'react-router-dom';
import eventApi from '../api/requests/event.requests';

const EventRegister = () => {

    const {eventId} = useParams()
    const [title, setTitle] = useState('')

    useEffect(() => {
        const getEventInfo = async () => {
            const {response, error} = await eventApi.getEventInformation({eventId})

            if(response){
                setTitle(response.title)
            }
            if(error){
                console.log(error)
            }
        }
        getEventInfo()
    })
    return (
        <div className='flex justify-center flex-col'>
            <h2 className='text-4xl font-bold text-custom text-center pt-4'>Event registration</h2>
            <p className='italic opacity-80 text-lg text-center'>({title})</p>
            <ReturnLink/>
            <div className='flex justify-center'>
                <RegisterForm/>
            </div>
        </div>
    )
}

export default EventRegister