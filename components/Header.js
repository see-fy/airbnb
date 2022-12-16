import { useState, useEffect, useRef } from 'react'
import {
  MenuIcon,
  GlobeAltIcon,
  SearchIcon,
  XCircleIcon,
} from '@heroicons/react/outline'
import { UserCircleIcon, BadgeCheckIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'

const Header = () => {
  const [show, setShow] = useState(false)
  const router = useRouter()
  const locationRef = useRef(null)
  const dateRef = useRef(null)
  const guestRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [guests, setGuests] = useState(null)
  const [location, setLocation] = useState('')
  const [dateInput, setDateInput] = useState('')

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
    setDateInput(`${startDate?.toDateString()} -- ${endDate?.toDateString()}`)
  }
  const handleInputs = () => {
    setLocation(locationRef.current.value)
    setGuests(guestRef.current.value)
  }
  const handleDate = (e) => {
    setDateInput(e.target.value)
  }
  const resetInput = (e) => {
    e.preventDefault()
    setDateInput('')
  }
  const handleSubmit = () => {
    router.push({
      pathname: '/search',
      query: { location: location, dateInput, guests: guests },
    })
  }
  console.log(dateInput)
  const transistionHeader = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', transistionHeader)
    return () => window.removeEventListener('scroll', transistionHeader)
  }, [])
  const handleActive = (index) => {
    setActiveIndex(index)
  }
  const handleRender = () => {
    return (
      <div className=" flex flex-row items-center justify-between space-x-1">
        <div className="relative  mr-2 -ml-3 -mt-2 rounded-full hover:bg-gray-300">
          <h1 className="absolute top-2 left-[3.4rem] text-center text-sm font-semibold text-black ">
            Locations:
          </h1>
          <input
            type="text"
            ref={locationRef}
            onChange={handleInputs}
            placeholder="Where are  you going..."
            className="h-16 w-[18rem] flex-grow cursor-pointer  rounded-full pt-3  text-center  text-lg outline-none hover:bg-gray-300"
          />
        </div>
        <div className="relative  mx-auto -mt-2  rounded-full hover:bg-gray-300">
          <h1 className="absolute top-2 left-[6rem] text-center text-sm font-semibold text-black">
            Check in-Check out:
          </h1>
          <input
            type="text"
            ref={dateRef}
            value={dateInput}
            onChange={handleDate}
            placeholder="Add dates  here..."
            className="h-16 w-[18rem] flex-grow cursor-pointer rounded-full pt-3  text-center  text-xs outline-none hover:bg-gray-300"
          />
          {dateInput && (
            <XCircleIcon
              color="black"
              onClick={resetInput}
              className="absolute right-2 top-4 h-6 cursor-pointer rounded-full "
            />
          )}
        </div>
        <div>
          {activeIndex === 0 && (
            <div className="relative   -mt-2  rounded-full hover:bg-gray-300">
              <h1 className="absolute top-2 left-[7rem] text-center text-sm font-semibold text-black">
                Add Guests:
              </h1>
              <input
                type="text"
                min={0}
                ref={guestRef}
                placeholder="0"
                onChange={handleInputs}
                className="h-16 w-[18rem] flex-grow cursor-pointer  rounded-full pt-3  text-center  text-lg outline-none hover:bg-gray-300"
              />
              <button type="submit" className="absolute top-2 right-2">
                <SearchIcon
                  color="white"
                  onClick={handleSubmit}
                  className="h-12 rounded-full bg-red-500 p-3"
                />
              </button>
            </div>
          )}
          {activeIndex === 1 && (
            <button type="submit">
              <SearchIcon
                color="white"
                onClick={handleSubmit}
                className="h-12 rounded-full bg-red-500 p-3"
              />
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div
      className={`flex flex-row items-center justify-between ${
        show ? 'bg-white' : 'bg-black'
      } fixed  top-0 z-30 w-full py-3 px-20 transition-all duration-500 ease-in`}
    >
      <div className="p-2">
        <img
          src="https://logodownload.org/wp-content/uploads/2016/10/airbnb-logo-10.png"
          onClick={() => router.push('/')}
          className={`h-8 ${show && 'hidden'} cursor-pointer sm:flex`}
          alt="Airbnb logo"
        />
      </div>
      <div className="flex flex-col items-center justify-evenly">
        {!show ? (
          <div className="mx-auto hidden xl:flex xl:flex-col">
            <div className="mb-3 flex flex-row items-center justify-around space-x-2">
              <div
                className="flex cursor-pointer flex-col items-center justify-center p-2"
                onClick={() => handleActive(0)}
              >
                <button className="cursor-pointer border-none font-semibold text-white">
                  Places to Go
                </button>
                <button
                  className={`${
                    activeIndex == 0 ? 'bg-white' : 'bg-black'
                  } mt-1 h-1 w-8`}
                ></button>
              </div>
              <div
                className="flex cursor-pointer flex-col items-center justify-center p-2"
                onClick={() => handleActive(1)}
              >
                <button className="cursor-pointer border-none font-semibold text-white">
                  Experiences
                </button>
                <button
                  className={`${
                    activeIndex == 1 ? 'bg-white' : 'bg-black'
                  } mt-1 h-1 w-8`}
                ></button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button
                  className="cursor-pointer border-none font-semibold text-white"
                  onClick={() => router.push('/onlineExp')}
                >
                  Online Experiences
                </button>
              </div>
            </div>
            <div className="justify h-16 w-[50rem] rounded-full bg-white p-2 shadow-lg">
              {handleRender()}
            </div>
          </div>
        ) : (
          <div className="h-16 w-[18rem] rounded-full border bg-white shadow-lg md:w-[42rem]">
            <div className=" flex flex-row items-center justify-evenly space-x-1">
              <div className="grow p-2">
                <input
                  type="text"
                  placeholder="Where are you  going?"
                  className="mt-1 h-10 w-[24rem] rounded-full bg-transparent p-1 text-center text-lg outline-none"
                />
              </div>
              <button type="submit">
                <SearchIcon
                  color="white"
                  className="mx-2 hidden h-12 rounded-full bg-red-500 p-3 md:flex"
                />
              </button>
            </div>
          </div>
        )}
        <div className="absolute -bottom-[23.5rem]">
          {dateInput && (
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
              months={1}
              direction="horizontal"
            />
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center justify-between">
          <GlobeAltIcon className="h-14 cursor-pointer p-4 invert hover:mr-2  hover:rounded-2xl hover:bg-gray-500" />
        </div>
        <div
          className={`${
            show ? 'bg-gray-100' : 'bg-white'
          } flex h-10 w-16 flex-row items-center justify-around rounded-full p-1`}
        >
          <MenuIcon className="h-4 cursor-pointer" />
          <UserCircleIcon className="h-8 cursor-pointer" />
          <BadgeCheckIcon
            className="-mt-7 -ml-4 h-3 cursor-pointer "
            color="red"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
