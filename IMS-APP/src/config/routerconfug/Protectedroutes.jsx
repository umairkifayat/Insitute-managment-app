import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PersistentDrawerLeft from '../../componenets/drawer/Drawer'
import Admission from '../../screens/admission-form/Admission'

const protectedroutes = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route  path='/' element = {<PersistentDrawerLeft />}/>
    <Route  path='admission' element = {<Admission />}/>

   </Routes>
   </BrowserRouter>
   </>
  )
}

export default protectedroutes
