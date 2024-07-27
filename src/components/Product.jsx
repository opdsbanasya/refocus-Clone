import React from 'react';
import ButtonNav from './ButtonNav';

const Product = ({elem, mover, count}) => {
    return (
        <div className='w-full py-20 px-20 h-[23rem]'>
            <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
                <h1 className='text-5xl capitalize font-medium'>{elem.title}</h1>
                <div className="details w-1/3 space-y-10">
                    <p>{elem.description}</p>
                   <div className="flex items-center gap-10">
                    {elem.live && <ButtonNav />}
                    {elem.case && <ButtonNav title='Case Study' />}
                   </div>
                </div>
            </div>
        </div>
    );
} 

export default Product;
