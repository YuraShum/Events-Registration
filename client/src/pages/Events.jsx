import React, { useEffect, useState } from 'react'
import eventApi from '../api/requests/event.requests'
import EventItem from '../components/EventItem'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Events = () => {

    const [allEvents, setAllEvents] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const step = 12
    const totalPages = Math.ceil(allEvents.length / step);

    const indexOfLastEvent = currentPage * step;
    const indexOfFirstEvent = indexOfLastEvent - step;
    const currentEvents = allEvents.slice(indexOfFirstEvent, indexOfLastEvent);


    useEffect(() => {
        const getEvents = async () => {
            const {response, error} = await eventApi.getAllEvents()

            if(response){
                setAllEvents(response)
            }
            if(error){
                console.log(error)
            }
        }
        getEvents()
    }, [])
    console.log(allEvents)

    const handlePreviosPage = () => {
        if(currentPage > 1){
            setCurrentPage(prevValue => prevValue - 1)
            window.scrollTo(0, 0);
        }
    }
    const handleNextPage = () => {
        if(currentPage < totalPages){
            setCurrentPage(prevValue => prevValue + 1)
            window.scrollTo(0, 0);
        }
    }
    return (
        
        <div>
            <h1 className='text-4xl font-bold text-custom text-center py-4'>Events</h1>
            {/** filter section */}
            <div>

            </div>
            {/** event section */}
            <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 ">
                {currentEvents.map(event => (
                    <EventItem key={event._id} event={event}/>
                ))}
            </div>
            {/** pagination control section */}
            <div className='text-white py-7 flex justify-center items-center gap-2 '>
                <button 
                onClick={handlePreviosPage}>
                    <IoIosArrowBack/>
                </button>
                <span>...{currentPage}...</span>
                <button
                onClick={handleNextPage}>
                    <IoIosArrowForward className=''/>
                </button>
            </div>
            <div></div>
        </div>
    )
}

export default Events