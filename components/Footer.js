import React  from 'react'
const Footer = () => {

  return (
    <div className='flex flex-col lg:flex-row w-full justify-between items-center mb-4 border-t p-4'>    
        <div className="flex flex-row items-center justify-evenly space-x-4">
           <p className="text-white text-sm">© 2022 Airbnb, Inc</p>
           <p className="text-white text-lg font-semibold cursor-pointer">. Privacy</p>
           <p className="text-white text-lg font-semibold cursor-pointer">. Terms</p>
           <p className="text-white text-lg font-semibold cursor-pointer">. Sitemap</p>
        </div>
        <div className="flex flex-row items-center justify-between space-x-4">
           <p className="text-white text-sm font-semibold cursor-pointer">English (US)</p>
           <p className="text-white text-sm font-semibold cursor-pointer">$   (USD)</p>
           <p className="text-white text-sm font-semibold cursor-pointer">facebook</p>
           <p className="text-white text-sm font-semibold cursor-pointer">twitter</p>
           <p className="text-white text-sm font-semibold cursor-pointer">instagram</p>
        </div>
    </div>
  )
}

export default Footer
