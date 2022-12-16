import React from 'react'

function Banner() {
  let cover =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgY_MCsYfNCe2VeLlOmdKW9_a5UC9la0L4g&usqp=CAU'
  let style = {
    backgroundImage: 'url(' + cover + ')',
  }
  return (
    <div
      className="flex h-[50rem] w-full flex-col items-center justify-center bg-black bg-cover bg-no-repeat"
      style={style}
    >
      <div className="">
        <h1 className="mb-8  text-center text-4xl font-bold text-black">
          Let your curiosity do the booking
        </h1>
        <button className="mx-[6rem] mt-2 w-44 rounded-full border bg-white p-2 text-center text-xl font-semibold text-slate-900 md:mx-[20rem]">
          I am Flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
