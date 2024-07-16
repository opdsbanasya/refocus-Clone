import React from 'react';
import ButtonNav from './ButtonNav';

const Navbar = () => {
    return (
        <div style={{borderBottom: "1px solid #555555"}} className='max-w-screen-xl py-6 mx-auto flex items-center justify-between'>
            <section className='flex items-center gap-20'>
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                <div className="links flex gap-14 items-center">
                    {["Home","Work","Culture","","News"].map((navlink, index)=> (
                        navlink.length === 0 ? (<span className='w-[2px] h-8 bg-zinc-500'></span>):(
                            <a href="#" key={index} className="text-md font-semibold flex items-center gap-1">
                            {index === 1 && (
                                <span style={{boxShadow:"0 0 0.25em #00FF19" }} className='inline-block w-2 h-2 bg-green-500 rounded-full'></span> 
                            )}
                            {navlink}
                        </a>
                        )
                        
                    ))}
                </div>
            </section>
            <ButtonNav />
        </div>
    );
}

export default Navbar;
