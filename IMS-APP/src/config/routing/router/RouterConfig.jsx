import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from '../../../screens/login/Login'
import Admission from '../../../screens/admission-form/Admission'
import Student from '../../../screens/student/Student'

const RouterConfig = () => {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='' element={<SignUp />} />
          <Route path='/admission' element={<Admission />} />
          <Route path='/student' element={<Student />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterConfig
