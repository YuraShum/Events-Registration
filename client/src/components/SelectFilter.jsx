import React from "react";
import { CiCirclePlus } from "react-icons/ci";



const SelectFilter = ({selectedSortCtriteria, handleChangeSelectedCriteria}) => {



  return (
    <div className='flex justify-between items-center px-6'>
      <div className=' flex gap-2 items-center'>
        <label className='text-xl'>Sort:</label>
        <select
          className='text-primary rounded-lg cursor-pointer'
          id="selectedSortCtriteria"
          value={selectedSortCtriteria}
          onChange={handleChangeSelectedCriteria}>
          <option value="none" >no sorting</option>
          <option value="title">by name</option>
          <option value="eventDate">by date</option>
          <option value="organizer">by organizer</option>
        </select>

      </div>
      <a
        href='/events/create'
        className=' flex gap-1 items-center cursor-pointer'>
        <span className='text-xl'>Create</span>
        <CiCirclePlus className='w-6 h-6' />
      </a>
    </div>
  )
}

export default SelectFilter