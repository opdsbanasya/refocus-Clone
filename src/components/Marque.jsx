import React from 'react';

const Marque = ({imgUrl}) => {
    return (
        <div className='w-full py-10 flex items-center justify-between gap-20 whitespace-nowrap overflow-hidden'>
            {imgUrl.map((url, index)=>(<img key={index} src={url} className='w-[7vw] flex-shrink-0'/>))}
            {imgUrl.map((url, index)=>(<img key={index} src={url} className=''/>))}
        </div>
    );
}

export default Marque;
