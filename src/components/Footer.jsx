
const Footer = () => {
    return (
        <div className='w-full h-fit flex bg-[#111111] pb-10'>
            <section className='w-[60%] h-full grid place-items-center'>
                <h1 className='text-[16vw] leading-none tracking-tighter font-semibold'>refokus.</h1>
            </section>
            <section className='w-[40%] h-full flex items-start mt-20 justify-center gap-16'>
                <section>
                    <h3 className='text-slate-600 text-xl mb-10'>Socials</h3>
                    <section>
                        {["Instagram","Twitter","LinkedIn"].map((social, index)=>(
                            <h4 key={index} className='text-slate-600 text-xl py-1'>{social}</h4>
                        ))}
                    </section>
                </section>
                <section>
                    <h3 className='text-slate-600 text-xl mb-10'>Sitemaps</h3>
                    <section>
                        {["Home","Work","Careers","Contact"].map((sitemap, index)=>(
                            <h4 key={index} className='text-slate-300 text-xl py-1'>{sitemap}</h4>
                        ))}
                    </section>
                </section>
                <section className=''>
                    <h3 className='text-slate-300 text-xl mb-10 text-right'>Refokus is <br /> pioneering digital <br /> agency driven by <br /> design and <br /> empowered by <br /> technology</h3>
                    <img className='ml-20 bg-sky-500 px-2 py-1' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                </section>
            </section>
        </div>
    );
}

export default Footer;
