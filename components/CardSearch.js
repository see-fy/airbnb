import React from 'react'
import { useRouter } from 'next/router'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'

function CardSearch({ img, location, title, description, price, star, total }) {
  const router = useRouter()
  return (
    <div className="justiy-center my-4 flex h-[22rem] w-full items-center rounded-2xl border p-2 shadow-xl">
      <img
        src={img}
        alt="apt picture"
        className="mx-2 h-[6rem] w-[6rem] rounded-2xl md:h-[14rem] md:w-[20rem]"
      />
      <div className="flex-grow space-y-10 md:space-y-20">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <p className="text-xs md:text-sm">{location}</p>
            <h1 className="text-xs font-semibold text-black md:text-lg">
              {title}
            </h1>
            <p className="text-xs">{description}</p>
          </div>
          <HeartIcon className="-mt-10 h-8 w-8 md:-mt-20" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <StarIcon color="gold" className="h-6 w-6" />
            <h1>{star}</h1>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <h1 className="text-xs font-bold">{price}</h1>
            <p className="text-xs">{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSearch
