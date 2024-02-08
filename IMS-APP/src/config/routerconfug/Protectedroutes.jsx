import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PersistentDrawerLeft from '../../componenets/drawer/Drawer'
// import Admission from '../../screens/admission-form/Admission'
import Login from '../../screens/login.jsx/Login'

const Protectedroutes = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    {/* <Route  path='/' element = {<PersistentDrawerLeft />}/> */}
    <Route  path='/' element = {<Login />}/>

   </Routes>
   </BrowserRouter>
   </>
  )
}

export default Protectedroutes
