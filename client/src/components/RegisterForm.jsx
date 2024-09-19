import { useForm } from 'react-hook-form';
import eventApi from '../api/requests/event.requests';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterForm = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const { eventId } = useParams()

    const navigate = useNavigate()

    const submitRegisteredUser = async (values) => {
        const { response, error } = await eventApi.addUserToEvent({
            eventId,
            ...values
        })

        if (response) {
            reset()
            navigate("/events");
            toast.success(`Successfully registered`)
        }
        if (error) {
            console.log(error)
            toast.error("Failed to register")
        }


    }

    const handleCancelForm = () => {
        reset()
    }
    return (
        <form
            onSubmit={handleSubmit(submitRegisteredUser)}
            className='flex flex-col gap-4 p-6 max-w-[600px] w-full text-custom'>
            <div className='flex flex-col gap-2'>
                <label className='text-lg md:text-xl font-bold'>Full name</label>
                <input
                    type="text"
                    placeholder='Enter your name here'
                    {...register("fullname", { required: true })}
                    className="bg-gray-100 p-3 text-sm md:text-lg border-gray-300 border-2 rounded-lg text-black" />
                {errors.fullname && (
                    <p className="text-red-500 text-sm -mt-1 pl-3">Поле обов'язкове.</p>
                )}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-lg md:text-xl font-bold'>Email</label>
                <input
                    type="email"
                    placeholder='Enter your email here'
                    {...register("email", { required: true })}
                    className="bg-gray-100 p-3 text-sm md:text-lg border-gray-300 border-2 rounded-lg text-black" />
                {errors.email && (
                    <p className="text-red-500 text-sm -mt-1 pl-3">Поле обов'язкове.</p>
                )}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-lg md:text-xl font-bold'>Date of birth</label>
                <input
                    type="date"
                    placeholder='Enter your date of birth here'
                    {...register("dateOfBirth", { required: true })}
                    className="bg-gray-100 p-3 text-sm md:text-lg border-gray-300 border-2 rounded-lg text-black" />
                {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm -mt-1 pl-3">Поле обов'язкове.</p>
                )}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-lg md:text-xl font-bold'>
                    Where did you hear about this event?
                </label>
                <div className='flex justify-between flex-col sm:flex-row'>
                    <label
                        className='flex gap-1 items-center cursor-pointer'
                    >
                        <input
                            type="radio"
                            value="Social media"
                            {...register("source", { required: true })}
                            className="cursor-pointer accent-link"
                        />
                        Social media
                    </label>
                    <label
                        className='flex gap-1 items-center cursor-pointer'>
                        <input
                            type="radio"
                            value="Friends"
                            {...register("source", { required: true })}
                            className="cursor-pointer accent-link"
                        />
                        Friends
                    </label>
                    <label
                        className='flex gap-1 items-center cursor-pointer'>
                        <input
                            type="radio"
                            value="Found myself"
                            {...register("source", { required: true })}
                            className="cursor-pointer accent-link"
                        />
                        Found myself
                    </label>
                </div>
                {errors.source && (
                    <p className="text-red-500 text-sm -mt-1 pl-3">Поле обов'язкове.</p>
                )}
            </div>
            <div className='flex items-center justify-between'>
                <button 
                onClick={handleCancelForm}
                className='text-lg md:text-lg py-1 px-2 border-2 border-gray-300 rounded-lg cursor-pointer duration-500 hover:translate-y-[-2px]'>
                    Cancel
                </button>
                <button
                    className='w-fit text-lg md:text-xl bg-link hover:bg-orange-400 py-1 px-2 rounded-lg cursor-pointer duration-500 hover:translate-y-[-2px]'
                    type='submit'>
                    Register
                </button>
            </div>

        </form >
    )
}

export default RegisterForm