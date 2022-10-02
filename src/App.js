import { Router, Route, Routes } from 'react-router-dom'
import './App.css'
// import Banner from './pages/Home/Banner/Banner'
import Home from './pages/Home/Home/Home'
import Login from './pages/Login/Login'
import Header from './pages/Shared/Header/Header'
import SignUp from './pages/SignUp/SignUp'
import Breakfast from './pages/Home/Breakfast/Breakfast'
import Lunch from './pages/Home/Lunch/Lunch'
import Dinner from './pages/Home/Dinner/Dinner'

function App () {
  return (
    <div className='App'>
      <Header></Header>

      <Routes>
        <Route path='breakfast' element={<Breakfast></Breakfast>} />
        <Route path='lunch' element={<Lunch></Lunch>} />
        <Route path='dinner' element={<Dinner></Dinner>} />

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        {/* <Header></Header>
          <Banner></Banner> */}
      </Routes>
    </div>
  )
}

export default App
