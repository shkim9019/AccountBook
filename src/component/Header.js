import React from 'react';

const Header = ({title, leftChild, rightChild}) => {
    return (
        <div className="flex pt-12 text-center grid grid-cols-3 ">
            {/* <h1 
                className="py-6 my-6 text-center text-5xl font-sans underline underline-offset-8 decoration-2 decoration-double">
                {title}
            </h1> */}
            <div>{leftChild}</div>
            <div 
                className='text-5xl font-sans underline underline-offset-8 decoration-2 decoration-double grid-cols-4'>
                {title}
            </div>
            <div>{rightChild}</div>
        </div>
    )
}

export default React.memo(Header);