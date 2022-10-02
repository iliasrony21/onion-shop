import React from 'react'
import bannerimage from '../../../images/banner.png'
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bannerimage})`,
          height: '550px',
          backgroundSize: 'cover',
          backgroundColor: '#FCF4E0',
          width: '1586px',
          marginLeft: '-50px',
          marginRight: '-170px',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h1 className=' title text-center text-bold '>
          Best food waiting for your belly
        </h1>
        <div className='wrap'>
          <div className='search-box'>
            <input
              type='text'
              name='search'
              id=''
              placeholder='Search food items'
            />
            <div className='buttonsearch'>
              <button className='btn btn-danger mt-0 buttons rounded-pill'>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
