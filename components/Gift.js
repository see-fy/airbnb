import React from 'react'

function Gift() {
  return (
    <div className="flex flex-row items-center justify-around  mb-20">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-white font-bold w-[24rem] text-2xl text-center mb-4">Shop Airbnb<br />gift cards</h1>
            <button className="text-black w-[12rem]  p-3 rounded-2xl bg-white">Learn more</button>
        </div>
        <img src="https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=1200" alt="iftcards" className="w-full hidden md:flex object-contain h-[24rem] invert" />
    </div>
  )
}

export default Gift