import { IoIosArrowBack } from "react-icons/io";

const ReturnLink = () => {
    return (
        <a
            href='/events'
            className='flex w-fit items-center ml-4 text-lg cursor-pointer duration-500 hover:translate-y-[-2px] hover:text-orange-400'>
            <IoIosArrowBack className='' />
            <span>Return back</span>
        </a>
    )
}

export default ReturnLink