import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from '../../../screens/login/Login'
import Admission from '../../../screens/admission-form/Admission'

const RouterConfig = () => {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='' element={<SignUp />} />
          <Route path='/admission' element={<Admission />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterConfig
