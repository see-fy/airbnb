import React from 'react'

function Banner() {
  return (
    <div  className="relative mx-auto mb-20">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5nFbrAqBIjT4r2SdgFCi5yJ_BFVfPM2avrOgtcdkumV5p1yb8Z4XgnF-Obi1QZGN6-E&usqp=CAU" alt="Banner" className="w-[44rem] lg:w-[72rem] object-cover lg:h-[42rem] h-[24rem]" />  
        <h1  className="text-white lg:text-6xl text-3xl  top-10 left-10 mb-8 absolute font-semibold">Questions about <br  /> hosting</h1>
        <button className="bg-white text-black p-2 border text-sm bottom-14 left-10 absolute rounded-2xl mt-2 text-center w-44 font-semibold">Ask a superhost</button>
    </div>
  )
}

export default Banner