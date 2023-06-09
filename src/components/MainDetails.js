import React from 'react'

const MainDetails = ( {name, address} ) => {
    return (
        <>
            <section className="flex flex-col items-end justify-end">
                <h2 className="font-bold uppercase text-xl mb-1 md:text-4xl">{name}</h2>
                <p>{address}</p>
            </section>
        </>
    )
}

export default MainDetails
