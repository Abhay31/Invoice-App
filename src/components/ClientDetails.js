import React from 'react'

const ClientDetails = ( {clientName, clientAddress} ) => {
    return (
        <>
            <section className="mt-5">
                <h2 className="uppercase text-xl">{clientName}</h2>
                <p>{clientAddress}</p>
            </section>
        </>
    )
}

export default ClientDetails
