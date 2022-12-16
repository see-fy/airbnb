import React from 'react'

function Nextrip({ explores }) {

    return (
        <div>
        <h1 className="text-4xl text-white my-10 font-bold">Inspiration for your next trip</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
                explores?.map(({ img, location, distance }) => {
                    return (
                        <div key={Math.floor(distance/(Math.pow(10,distance.length)))} className="cursor-pointer flex flex-row space-x-4 hover:bg-gray-900 hover:scale-105 hover:opacity-0.2 transition transform duration-200 rounded-2xl ease-out p-2">
                            <img src={img} alt={location} className="h-[6rem] w-[6rem] rounded-2xl p-2" />
                            <div className={`rounded-full my-3`}>
                                <h1 className="text-white text-xl font-bold ">{location}</h1>
                                <h1 className="text-white text-sm">{distance}<br  /> Kilometers away</h1> 
                            </div> 
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Nextrip