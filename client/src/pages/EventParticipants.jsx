import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import eventApi from '../api/requests/event.requests'
import ReturnLink from '../components/ui/ReturnLink'
import ListenerItem from '../components/ui/ListenerItem'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const EventParticipants = () => {

  const { eventId } = useParams()

  const [allParticipants, setAllParticipants] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  const step = 6
  const totalPages = Math.ceil(allParticipants.length / step);

  const indexOfLastParticipants = currentPage * step;
  const indexOfFirstParticipants = indexOfLastParticipants - step;
  const currentParticipants = allParticipants.slice(indexOfFirstParticipants, indexOfLastParticipants);


  useEffect(() => {
    const getAllInfoAboutEvent = async () => {
      const { response, error } = await eventApi.getEventInformation({ eventId })

      if (response) {
        setAllParticipants(response.userListeners)
      }
      if (error) {
        console.log(error)
      }
    }

    getAllInfoAboutEvent()
  }, [])


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


  return (
    <div className='text-white'>
      <h2 className='text-4xl font-bold text-custom text-center py-4'>EventParticipants</h2>
      <ReturnLink />
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 ">
        {currentParticipants.map(listener => (
          <ListenerItem key={listener._id} listener={listener} />
        ))}
      </div>
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
      </div>
    </div>

  )
}

export default EventParticipants