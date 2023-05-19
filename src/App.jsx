import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Collections from './pages/collections/Collections'
import Masterlayout from './layouts/Masterlayout'
import Dashboard from './components/admin/Dashboard'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/collections' element={<Collections/>} />
        <Route path='/admin' element={<Masterlayout/>}>
          <Route path='/admin/dashboard' element={<Dashboard/>} />
        </Route>
       

      </Routes>
    </div>
  )
}

export default App