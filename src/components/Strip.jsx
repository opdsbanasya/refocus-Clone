
const Strip = ({elem}) => {

    return (
        <div className='w-1/6 border-[1.5px] border-zinc-600 border-l-0 px-4 py-5 flex items-center justify-between'>
            <span><img src={elem.url} alt="" /></span> <span className='text-lg'>{elem.num}</span>
        </div>
    );
}

export default Strip;
