import React from 'react'
import AllfoodDetails from '../AllfoodDetails/AllfoodDetails'
// import { Link } from 'react-router-dom'
// import AllfoodDetails from '../AllfoodDetails/AllfoodDetails'
import Banner from '../Banner/Banner'

const Home = () => {
  return (
    <div>
      <div className='banner'>
        <Banner></Banner>
        <AllfoodDetails></AllfoodDetails>
      </div>
    </div>
  )
}

export default Home
