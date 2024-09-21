import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import eventApi from '../api/requests/event.requests'
import ReturnLink from '../components/ui/ReturnLink'
import ListenerItem from '../components/ui/ListenerItem'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Loader from '../components/ui/Loader/Loader'

const EventParticipants = () => {

  const { eventId } = useParams()

  const [allParticipants, setAllParticipants] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [eventTitle, setEventTitle] = useState("")
  const [searchValue, ssetSearchValue] = useState("")
  const [filteredParticipants, setFilteredParticipants] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const step = 6
  const totalPages = Math.ceil(filteredParticipants.length / step);

  const indexOfLastParticipants = currentPage * step;
  const indexOfFirstParticipants = indexOfLastParticipants - step;
  const currentParticipants = filteredParticipants.slice(indexOfFirstParticipants, indexOfLastParticipants);


  useEffect(() => {
    const getAllInfoAboutEvent = async () => {
      setIsLoading(true)
      const { response, error } = await eventApi.getEventInformation({ eventId })
      setIsLoading(false)
      if (response) {
        setAllParticipants(response.userListeners)
        setEventTitle(response.title)
        setFilteredParticipants(response.userListeners)
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

  const handleSearch = (event) => {
    const eventValue = event.target.value

    ssetSearchValue(eventValue)

    const filtered = allParticipants.filter(participant =>
      participant.email.toLowerCase().includes(eventValue.toLowerCase()) ||
      participant.fullname.toLowerCase().includes(eventValue.toLowerCase())
    )
    setFilteredParticipants(filtered)
    setCurrentPage(1)
  }


  return (
    <>
      {isLoading ?
        <Loader />
        :
        <div className='text-white'>
          <h2 className='text-4xl font-bold text-custom text-center pt-4 py-6'>Event Participants</h2>
          <p className='italic opacity-80 text-lg text-center'>({eventTitle})</p>
          <div className='flex justify-between items-center px-6 mt-4'>
            <ReturnLink />
            <div className='relative text-black'>
              <CiSearch className='absolute top-[8px] md:top-[12px] left-0 w-6 h-6' />
              <input
                className='bg-gray-100 p-2 text-sm md:text-lg border-gray-300 border-2 rounded-lg pl-6'
                type="text"
                placeholder='Search'
                value={searchValue}
                onChange={handleSearch} />
            </div>
          </div>
          {currentParticipants.length > 0 ?
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 ">

              <>
                {currentParticipants.map(listener => (
                  <ListenerItem key={listener._id} listener={listener} />
                ))}
              </>
            </div> :
            <h3 className='text-2xl mt-10 opacity-80 border-2 border-gray-50 w-fit m-auto p-3 rounded-xl'>
              Unfortunately, there are no registered listeners yet
            </h3>}
          {totalPages > 1 &&
            <div className='text-white py-7 flex justify-center items-center gap-2'>
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
        </div>}
    </>
  )
}

export default EventParticipants