import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import eventApi from '../api/requests/event.requests';
const NewEventForm = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const navigate = useNavigate()

    const handleCancelForm = () => {
        reset()
    }

    const submiteNewEvent = async (values) => {
        console.log(values)
        const {response, error} = await eventApi.createNewEvent(values)

        if(response){
            reset()
            navigate("/events");
            toast.success(`Successfully created`)
        }
        if (error) {
            console.log(error)
            toast.error("Failed create new Event")
        }
    }

    return (
        <form
        onSubmit={handleSubmit(submiteNewEvent)}
            className='flex flex-col gap-4 p-6 max-w-[600px] text-custom'>
            <div className='flex flex-col gap-2'>
                <label className='text-lg md:text-xl font-bold'>Title</label>
                <input
                    type="text"
                    placeholder='Enter title here'
                    {...register("title", { required: true })}
                    className="bg-gray-100 p-3 text-sm md:text-lg border-gray-300 border-2 rounded-lg text-black" />
                {errors.title && (
                    <p className="text-red-500 text-sm -mt-1 pl-3">Назва події обов'язкова.</p>
                )}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-lg md:text-xl font-bold'>Description</label>
                <textarea
                    placeholder='Enter description here'
                    {...register("description", { required: true })}
                    className="bg-gray-100 p-3 text-sm md:text-lg border-gray-300 border-2 rounded-lg text-black h-[20vh]" />
                {errors.description && (
                    <p className="text-red-500 text-sm -mt-1 pl-3">Опис події обов'язковий.</p>
                )}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-lg md:text-xl font-bold'>Event date</label>
                <input
                    type="date"
                    placeholder='Enter event date here'
                    {...register("eventData", { required: true })}
                    className="bg-gray-100 p-3 text-sm md:text-lg border-gray-300 border-2 rounded-lg text-black" />
                {errors.eventData && (
                    <p className="text-red-500 text-sm -mt-1 pl-3">Дата обов'язкова.</p>
                )}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-lg md:text-xl font-bold'>Organizer</label>
                <input
                    type="text"
                    placeholder='Enter your full name here'
                    {...register("organizer", { required: true })}
                    className="bg-gray-100 p-3 text-sm md:text-lg border-gray-300 border-2 rounded-lg text-black" />
                {errors.organizer && (
                    <p className="text-red-500 text-sm -mt-1 pl-3">Ім'я організатора обов'язкове.</p>
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
                    Create
                </button>
            </div>
        </form>
    )
}

export default NewEventForm