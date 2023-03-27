import React from 'react';

const Header = ( {handlePrint} ) => {
    return (
        <>
            <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
                <div>
                    <h1 className="font-bold uppercase text-center justify-center tracking-wide text-5xl mb-3">Invoice</h1>
                </div>
            </header>
        </>
    )
}

export default Header
