import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({title, leftChild, rightChild}) => {
    const navigate = useNavigate();
    
    const goHome = () => {
        navigate("/", {replace : true});
    }

    return (
        <div className="flex py-12 text-center grid grid-cols-3 text-xl align-middle">
            {/* <h1 
                className="py-6 my-6 text-center text-5xl font-sans underline underline-offset-8 decoration-2 decoration-double">
                {title}
            </h1> */}
            <div>{leftChild}</div>
            <div 
                className='text-5xl font-sans  cursor-pointer text-stone-700'
                onClick={goHome}
            > {title}
            </div>
            <div>{rightChild}</div>
        </div>
    )
}

export default React.memo(Header);