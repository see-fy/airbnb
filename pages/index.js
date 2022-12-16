import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Nextrip from '../components/Nextrip'
import Discover from '../components/Discover'
import Host from '../components/Host'
import Gift from '../components/Gift'
import Footer from '../components/Footer'
const dummy = [
  {
    img: 'https://links.papareact.com/5j2',
    location: 'London',
    distance: '45-minute drive',
  },
  {
    img: 'https://links.papareact.com/1to',
    location: 'Manchester',
    distance: '4.5-hour drive',
  },
  {
    img: 'https://links.papareact.com/40m',
    location: 'Liverpool',
    distance: '4.5-hour drive',
  },
  {
    img: 'https://links.papareact.com/msp',
    location: 'York',
    distance: '4-hour drive',
  },
  {
    img: 'https://links.papareact.com/2k3',
    location: 'Cardiff',
    distance: '45-minute drive',
  },
  {
    img: 'https://links.papareact.com/ynx',
    location: 'Birkenhead',
    distance: '4.5-hour drive',
  },
  {
    img: 'https://links.papareact.com/kji',
    location: 'Newquay',
    distance: '6-hour drive',
  },
  {
    img: 'https://links.papareact.com/41m',
    location: 'Hove',
    distance: '2-hour drive',
  },
]
const Home = ({ explores }) => {
  return (
    <div className="bg-black">
      <Head>
        <title>
          AirBnB: Vacations Rentals, Cabins, Beach Houses, Unique Homes &
          Experiences-AirBnB
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="mx-auto max-w-7xl">
        <Nextrip explores={explores} />
        <Discover />
        <Gift />
        <Host />
      </main>
      <Footer />
    </div>
  )
}

export default Home

export async function getStaticProps(context) {
  // Fetch data from external API
  // const res = await fetch(`https://jsonkeeper.com/b/VXBF`)
  // if (!res.ok) {
  //   throw new Error(`Error! status: ${response.status}`)
  // }

  const explores = dummy

  // Pass data to the page via props
  return { props: { explores } }
}

// [{"img":"https://links.papareact.com/5j2","location":"London","distance":"45-minute drive"},{"img":"https://links.papareact.com/1to","location":"Manchester","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/40m","location":"Liverpool","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/msp","location":"York","distance":"4-hour drive"},{"img":"https://links.papareact.com/2k3","location":"Cardiff","distance":"45-minute drive"},{"img":"https://links.papareact.com/ynx","location":"Birkenhead","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/kji","location":"Newquay","distance":"6-hour drive"},{"img":"https://links.papareact.com/41m","location":"Hove","distance":"2-hour drive"}]
