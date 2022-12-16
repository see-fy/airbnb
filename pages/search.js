import React from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import CardSearch from '../components/CardSearch'
import Map from '../components/Map'
const dummy = [
  {
    img: 'https://links.papareact.com/xqj',
    location: 'Private room in center of London',
    title: 'Stay at this spacious Edwardian House',
    description:
      '1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
    star: 4.73,
    price: '£30 / night',
    total: '£117 total',
    long: -0.0022275,
    lat: 51.5421655,
  },
  {
    img: 'https://links.papareact.com/hz2',
    location: 'Private room in center of London',
    title: 'Independant luxury studio apartment',
    description:
      '2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen',
    star: 4.3,
    price: '£40 / night',
    total: '£157 total',
    long: -0.095091,
    lat: 51.48695,
  },
  {
    img: 'https://links.papareact.com/uz7',
    location: 'Private room in center of London',
    title: 'London Studio Apartments',
    description:
      '4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine',
    star: 3.8,
    price: '£35 / night',
    total: '£207 total',
    long: -0.135638,
    lat: 51.521916,
  },
  {
    img: 'https://links.papareact.com/6as',
    location: 'Private room in center of London',
    title: '30 mins to Oxford Street, Excel London',
    description:
      '1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
    star: 4.1,
    price: '£55 / night',
    total: '£320 total',
    long: -0.069961,
    lat: 51.472618,
  },
  {
    img: 'https://links.papareact.com/xhc',
    location: 'Private room in center of London',
    title: 'Spacious Peaceful Modern Bedroom',
    description:
      '3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning',
    star: 5.0,
    price: '£60 / night',
    total: '£450 total',
    long: -0.08472,
    lat: 51.510794,
  },
  {
    img: 'https://links.papareact.com/pro',
    location: 'Private room in center of London',
    title: 'The Blue Room In London',
    description:
      '2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine',
    star: 4.23,
    price: '£65 / night',
    total: '£480 total',
    long: -0.094116,
    lat: 51.51401,
  },
  {
    img: 'https://links.papareact.com/8w2',
    location: 'Private room in center of London',
    title: '5 Star Luxury Apartment',
    description:
      '3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
    star: 3.85,
    price: '£90 / night',
    total: '£650 total',
    long: -0.109889,
    lat: 51.521245,
  },
]

function Search({ searches }) {
  const router = useRouter()
  console.log(router.query)
  return (
    <div className="h-full">
      <Header />
      <main className="p-20">
        <section className="mt-20 flex flex-col items-center justify-center border-b pb-10">
          <div className="flex w-[24rem] flex-row items-center justify-around rounded-full border p-4 shadow-lg md:w-[30rem] ">
            <p className="text-center text-sm font-semibold text-black">
              {router.query.location}
            </p>
            <p className="-mt-2 text-2xl opacity-25">|</p>
            <p className="text-center text-sm font-semibold text-black">
              {router.query.dateInput}
            </p>
            <p className="-mt-2 text-2xl opacity-25">|</p>
            <p className="text-center text-sm font-semibold text-black">
              {router.query.guests}
            </p>
          </div>
          <div className="mt-4 grid shrink-0 grid-cols-3 items-center justify-around gap-10 space-x-4 sm:grid-cols-4 lg:flex">
            <p className="md:text-medium ml-2 w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              Price ⮟
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              T. of place
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              F. cancellation
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              Wifi
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              Kitchen
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              Washer
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              F. parking
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              D. workplace
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              Self-check-in
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              Hot tub
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              Dryer
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              Pool
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              Indoor fireplace
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              Iron
            </p>
            <p className="md:text-medium w-24 cursor-pointer rounded-2xl border  p-3 text-xs shadow-lg hover:border-4">
              ⭾ Filters
            </p>
          </div>
        </section>
        <section className="mt-10 flex items-center justify-between">
          <section className="flex-grow space-y-20 border-r p-4">
            <h1 className="mb-4 text-4xl font-bold">
              Stay in {router.query.location}
            </h1>
            <p>
              300+ stays in {router.query.location} for {router.query.guests}{' '}
              guests
            </p>
            {searches.map(
              ({ img, location, title, description, price, star, total }) => (
                <CardSearch
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  price={price}
                  star={star}
                  total={total}
                />
              )
            )}
          </section>
          <section className="hidden xl:inline-flex xl:min-w-[600px]">
            <Map />
          </section>
        </section>
      </main>
    </div>
  )
}

export default Search

export async function getStaticProps(context) {
  // Fetch data from external API
  // const res = await fetch(`https://jsonkeeper.com/b/5NPS`)
  const searches = dummy

  // Pass data to the page via props
  return { props: { searches } }
}
