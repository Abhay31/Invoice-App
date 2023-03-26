import React from 'react'

const Notes = ( {notes} ) => {
    return (
        <>
            <div className="mt-10 mb-5">
                <p className="lg:w-1/2 text-justify">{notes}</p>
            </div>
        </>
    )
}

export default Notes
