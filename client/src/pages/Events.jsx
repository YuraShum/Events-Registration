import React, { useEffect, useState } from 'react'
import eventApi from '../api/requests/event.requests'
import EventItem from '../components/ui/EventItem';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import SelectFilter from '../components/SelectFilter';
import Loader from '../components/ui/Loader/Loader';


const Events = () => {

    const [allEvents, setAllEvents] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [sortedEvents, setSortedEvents] = useState([]);
    const [selectedSortCtriteria, setSelectedSortCriteria] = useState("none")
    const [isLoading, setIsLoading] = useState(false)

    const step = 12
    const totalPages = Math.ceil(sortedEvents.length / step);

    const indexOfLastEvent = currentPage * step;
    const indexOfFirstEvent = indexOfLastEvent - step;
    const currentEvents = sortedEvents.slice(indexOfFirstEvent, indexOfLastEvent);


    useEffect(() => {
        const getEvents = async () => {
            setIsLoading(true)
            const { response, error } = await eventApi.getAllEvents()

            setIsLoading(false)
            if (response) {

                setAllEvents(response)
                setSortedEvents(response)
            }
            if (error) {
                console.log(error)
            }
        }
        getEvents()
    }, [])

    useEffect(() => {
        let sorted = [...allEvents]

        if (selectedSortCtriteria !== 'none') {
            sorted = sorted.sort((a, b) => {
                switch (selectedSortCtriteria) {
                    case 'title':
                        return a.title.localeCompare(b.title);
                    case 'eventDate':
                        return new Date(a.eventDate) - new Date(b.eventDate)
                    case 'organizer':
                        return a.organizer.localeCompare(b.organizer);

                    default:
                        return 0
                }
            })
        }
        setSortedEvents(sorted)

    }, [allEvents, selectedSortCtriteria])
    console.log(allEvents)

    const handlePreviosPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevValue => prevValue - 1)
            window.scrollTo(0, 0);
        }
    }
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevValue => prevValue + 1)
            window.scrollTo(0, 0);
        }
    }

    const handleChangeSelectedCriteria = (event) => {
        setSelectedSortCriteria(event.target.value)
    }
    return (
        <div className=''>
            {isLoading ?
                <Loader />
                :
                <>
                    <h1 className='text-4xl font-bold text-custom text-center py-4'>Events</h1>
                    {/** filter section */}
                    <SelectFilter
                        selectedSortCtriteria={selectedSortCtriteria}
                        handleChangeSelectedCriteria={handleChangeSelectedCriteria}
                    />
                    {/** event section */}
                    <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 ">
                        {currentEvents.map(event => (
                            <EventItem key={event._id} event={event} />
                        ))}
                    </div>
                    {/** pagination control section */}
                    {totalPages > 1 &&
                        <div className='text-white py-7 flex justify-center items-center gap-2 '>
                            <button
                                onClick={handlePreviosPage}>
                                <IoIosArrowBack />
                            </button>
                            <span>...{currentPage}...</span>
                            <button
                                onClick={handleNextPage}>
                                <IoIosArrowForward className='' />
                            </button>
                        </div>}
                </>}

        </div>
    )
}

export default Events