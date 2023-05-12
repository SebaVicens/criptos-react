import React from 'react'

function Error({children}) {
    return (
        <div className='bg-red-700 text-center w-full p-2 rounded-md text-white font-bold mb-5'>
            <p>{children}</p>
        </div>
    )
}

export default Error
