import React from 'react'

function Discover() {
  return (
    <div className='mb-20'>
        <h1 className='text-4xl text-white font-bold my-20'>Discover Airbnb Experience</h1>
        <div className='flex flex-row items-center justify-center space-x-8'>
            <div className="relative">
                <img src="https://empire-s3-production.bobvila.com/slides/39764/original/Chic_Crete_Cave_airbnb.jpg?1603137428" alt="airbnb exp" className='lg:h-[48rem] h-[24rem] lg:w-[48rem] w-[24rem] rounded-2xl object-cover' />
                <div className="absolute lg:top-20 top-10 lg:left-10 left-5 space-y-8">
                    <h1 className="text-center font-semibold text-white lg:text-6xl text-3xl">Things to do <br /> on your trip </h1>
                    <button className="bg-white text-center font-semibold lg:text-2xl text-xl rounded-2xl p-2 lg:w-52 w-32">Experiences</button>
                </div>
            </div>
            <div className="relative">
                <img src="https://news.airbnb.com/wp-content/uploads/sites/4/2018/07/161210-Seasonal_Q3-Domae_Edward-1577-min.jpeg?fit=4000%2C2667" alt="airbnb exp" className='lg:h-[48rem] h-[24rem] lg:w-[48rem] w-[24rem] rounded-2xl object-cover' />
                <div className="absolute lg:top-20 top-10 lg:left-10 left-5 space-y-8">
                    <h1 className="text-center font-semibold text-white lg:text-6xl text-3xl">Things to do <br /> from home</h1>
                    <button className="bg-white text-center font-semibold lg:text-2xl  text-xl p-2 rounded-2xl lg:w-[18rem] w-[10rem]">Online Experiences</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discover