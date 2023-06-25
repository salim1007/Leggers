import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Collections from './pages/collections/Collections'
import Masterlayout from './layouts/Masterlayout'
import Dashboard from './components/admin/Dashboard'
import AddCategory from './components/admin/category/AddCategory'
import AddProduct from './components/admin/products/AddProduct'


import axios from 'axios'
import EditCategory from './components/admin/category/EditCategory'
import ViewProduct from './components/admin/products/ViewProduct'
import EditProduct from './components/admin/products/EditProduct'
import ViewToCart from './pages/collections/ViewToCart'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/collections' element={<Collections/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/collections/:categoryid/:section/:namee' element={<ViewToCart/>}/>
        <Route path='/admin' element={<Masterlayout/>}>
          <Route path='/admin/dashboard' element={<Dashboard/>} />
          <Route path='/admin/add-category' element={<AddCategory/>}/>
          <Route path='/admin/add-product' element={<AddProduct/>} />
          <Route path='/admin/edit-category/:id' element={<EditCategory/>} />
          <Route path='/admin/edit-product/:id' element={<EditProduct/>}/>
          <Route path='/admin/view-product' element={<ViewProduct/>}/>

        </Route>
       

      </Routes>
    </div>
  )
}

export default App