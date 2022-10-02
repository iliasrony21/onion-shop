import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import './AllfoodDetails.css'
import breakfast1 from '../../../images/breakfast/breakfast1.png'
import breakfast2 from '../../../images/breakfast/breakfast2.png'
import breakfast3 from '../../../images/breakfast/breakfast3.png'
import breakfast4 from '../../../images/breakfast/breakfast4.png'
import breakfast5 from '../../../images/breakfast/breakfast5.png'
import breakfast6 from '../../../images/breakfast/breakfast6.png'

import lunch1 from '../../../images/lunch/lunch1.png'
import lunch2 from '../../../images/lunch/lunch2.png'
import lunch3 from '../../../images/lunch/lunch3.png'
import lunch4 from '../../../images/lunch/lunch4.png'
import lunch5 from '../../../images/lunch/lunch5.png'
import lunch6 from '../../../images/lunch/lunch6.png'

import dinner1 from '../../../images/dinner/dinner1.png'
import dinner2 from '../../../images/dinner/dinner2.png'
import dinner3 from '../../../images/dinner/dinner3.png'
import dinner4 from '../../../images/dinner/dinner4.png'
import dinner5 from '../../../images/dinner/dinner5.png'
import dinner6 from '../../../images/dinner/dinner6.png'

const AllfoodDetails = () => {
  const allfoods = [
    {
      id: 1.1,
      name: 'Bagel and cream cheese',
      description: 'How we dream about our future',
      img: breakfast1,
      price: '6.99',
      catagories: 'breakfast'
    },
    {
      id: 1.2,
      name: 'Breakfast sandwich',
      description: 'How we dream about our future',
      img: breakfast2,
      price: '9.99',
      catagories: 'breakfast'
    },
    {
      id: 1.3,
      name: 'Baked chicken',
      description: 'How we dream about our future',
      img: breakfast3,
      price: '10.99',
      catagories: 'breakfast'
    },
    {
      id: 1.4,
      name: 'Eggs Benedict',
      description: 'How we dream about our future',
      img: breakfast4,
      price: '8.99',
      catagories: 'breakfast'
    },
    {
      id: 1.5,
      name: 'Toast Croissant Fried eggs',
      description: 'How we dream about our future',
      img: breakfast5,
      price: '19.99',
      catagories: 'breakfast'
    },
    {
      id: 1.6,
      name: 'Full Breakfast Fried Egg Toast Brunch',
      description: 'How we dream about our future',
      img: breakfast6,
      price: '3.99',
      catagories: 'breakfast'
    },

    {
      id: 2.1,
      name: 'Healthy Meal plan',
      description: 'How we dream about our future',
      img: lunch1,
      price: '23.99',
      catagories: 'lunch'
    },
    {
      id: 2.2,
      name: 'Fried chicken Bento',
      description: 'How we dream about our future',
      img: lunch2,
      price: '9.99',
      catagories: 'lunch'
    },
    {
      id: 2.3,
      name: 'Tarragon-Rubbed-Salmon',
      description: 'How we dream about our future',
      img: lunch3,
      price: '6.99',
      catagories: 'lunch'
    },
    {
      id: 2.4,
      name: 'Indian Lunch',
      description: 'How we dream about our future',
      img: lunch4,
      price: '8.99',
      catagories: 'lunch'
    },
    {
      id: 2.5,
      name: 'Beef Steak',
      description: 'How we dream about our future',
      img: lunch5,
      price: '25.99',
      catagories: 'lunch'
    },
    {
      id: 2.6,
      name: 'Honey-Soy-Glazed Salmon with Peppers',
      description: 'How we dream about our future',
      img: lunch6,
      price: '7.99',
      catagories: 'lunch'
    },

    {
      id: 3.1,
      name: 'Salmon with Grapefruit and Lentil salad',
      description: 'How we dream about our future',
      img: dinner1,
      price: '9.99',
      catagories: 'dinner'
    },

    {
      id: 3.2,
      name: 'Lemony Salmon Piccata',
      description: 'How we dream about our future',
      img: dinner2,
      price: '10.99',
      catagories: 'dinner'
    },

    {
      id: 3.3,
      name: 'Pork Tenderion With Quinoa Pilaf',
      description: 'How we dream about our future',
      img: dinner3,
      price: '12.99',
      catagories: 'dinner'
    },

    {
      id: 3.4,
      name: 'French fries with cheese',
      description: 'How we dream about our future',
      img: dinner4,
      price: '8.99',
      catagories: 'dinner'
    },

    {
      id: 3.5,
      name: 'Garlic Butter Baked Salmon',
      description: 'How we dream about our future',
      img: dinner5,
      price: '6.99',
      catagories: 'dinner'
    },

    {
      id: 3.6,
      name: 'Baked Chicken',
      description: 'How we dream about our future',
      img: dinner6,
      price: '9.99',
      catagories: 'dinner'
    }
  ]
  const [foods, setFoods] = useState('breakfast')
  const [showdetails, setShowdetails] = useState(false)

  return (
    <div className='container'>
      <div className='allbtn'>
        <li
          className='links btn btn-link'
          onClick={() => {
            setFoods('breakfast')
            setShowdetails(false)
          }}
        >
          Breakfast
        </li>
        <li
          className=' links btn btn-link'
          onClick={() => {
            setFoods('lunch')
            setShowdetails(false)
          }}
        >
          Lunch
        </li>
        <li
          className='links btn btn-link'
          onClick={() => {
            setFoods('dinner')
            setShowdetails(false)
          }}
        >
          Dinner
        </li>
      </div>

      <div className='alldetails'>
        {allfoods.map(food => {
          return food.catagories === foods ? (
            <div
              onClick={() => {
                setFoods(food)
                setShowdetails(true)
              }}
              className='foodcontainer '
            >
              <img src={food.img} alt='' />
              <h5 key={food.id}>{food.name}</h5>
              <p>{food.description}</p>
              <h4 className='mb-5'>${food.price}</h4>
            </div>
          ) : (
            ''
          )
        })}
      </div>

      {showdetails && (
        <div className='details '>
          <div className='text-part'>
            <h1 className='header'>{foods.name}</h1>
            <p className='describe'>
              There is such a good things to do this.Every person deserve a
              better food so let's try our delicious food. We hope you will like
              this food very much.Let's have take a good food you selected.
              There is such a good things to do this.Every person deserve a
              better food so let's try our delicious food. We hope you will like
              this food very much.Let's have take a good food you selected.
            </p>
            <h2 className='price'>${foods.price} </h2>

            <button className='allwrap'>
              {' '}
              <button className='minus'>-</button> 1{' '}
              <button className='plus'>+</button>
            </button>

            <button className='addbtn'>
              <span></span> Add
            </button>
          </div>
          <div className='pic-part'>
            <img src={foods.img} alt='' />
          </div>
        </div>
      )}

      <button className='btn btn-primary pl-5 mb-5 mt-5'>
        Checkout your food
      </button>
    </div>
  )
}

export default AllfoodDetails
