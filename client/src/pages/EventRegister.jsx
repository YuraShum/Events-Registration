import React from 'react'

import { useParams } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import ReturnLink from '../components/ui/ReturnLink';

const EventRegister = () => {
    return (
        <div className='flex justify-center flex-col'>
            <h2 className='text-4xl font-bold text-custom text-center py-4'>Event registration</h2>
            <ReturnLink/>
            <div>
                <RegisterForm/>

            </div>
        </div>
    )
}

export default EventRegister