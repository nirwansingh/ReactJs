import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

const App = () => {

  const[isLoggedIn,setIsLoggedIn] = useState(false)

  return (
    <div className='w-screen h-screen bg-black flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element= {<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App
