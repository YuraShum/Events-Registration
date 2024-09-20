import React from 'react'
import "./Loader.css"

const Loader = () => {

    const loaderStyles = [
        '0.7s', '0.5s', '0.3s', '0.2s', '0.1s',
        '0.2s', '0.3s', '0.5s', '0.7s', '1s',
    ]
    const array = new Array(6).fill(null)
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <div className=' flex flex-row items-center justify-center relative w-full gap-4 min-h-[50px]'>
                {array.map((item, index) => (
                    <div
                        key={index}
                        className={`loader-line bg-link`}
                        style={{ animationDelay: loaderStyles[index] }}
                    >
                    </div>
                ))}
            </div>
            <p className='mt-4 text-2xl'>Loading...</p>

        </div>
    )
}

export default Loader