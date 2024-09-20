import React, { useEffect, useState } from 'react'
import RegisterForm from '../components/RegisterForm';
import ReturnLink from '../components/ui/ReturnLink';
import { useParams } from 'react-router-dom';
import eventApi from '../api/requests/event.requests';
import Loader from '../components/ui/Loader/Loader';

const EventRegister = () => {

    const { eventId } = useParams()
    const [title, setTitle] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getEventInfo = async () => {
            setIsLoading(true)
            const { response, error } = await eventApi.getEventInformation({ eventId })
            setIsLoading(false)
            if (response) {
                setTitle(response.title)
            }
            if (error) {
                console.log(error)
            }
        }
        getEventInfo()
    }, [])
    return (
        <>
            {isLoading ?
                <Loader />
                :
                <div className='flex justify-center flex-col'>
                    <h2 className='text-4xl font-bold text-custom text-center text-wrap pt-4 px-6'>Registration for the event</h2>
                    <p className='italic opacity-80 text-lg text-center'>({title})</p>
                    <ReturnLink />
                    <div className='flex justify-center'>
                        <RegisterForm />
                    </div>
                </div>}
        </>
    )
}

export default EventRegister