import Hero from '../assets/banner-main.png'

const Banner = () => {
    return (



        <div className='min-h-[400px] bg-amber-200 my-7 flex justify-center items-center flex-col' >
            <img src={Hero} alt="" />
            <h2 className='font-bold text-3xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p>Beyond Boundaries Beyond Limits</p>
            <button>Claim Free Credit</button>
        </div>
    );
};

export default Banner;