import React from 'react'
import logo from '../../../images/logo2.png'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='header-details d-flex '>
        <div className='picture'>
          <Link to='/home'>
            <img src={logo} alt='' />
          </Link>
        </div>
        <div className='linkup '>
          <ul>
            <Link className='loginbtn' to='/login'>
              <li>Login</li>
            </Link>
            <Link to='/signup'>
              <li>
                <button className='buttons '>SignUp</button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
