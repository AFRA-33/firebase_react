import React from 'react'
import { BrowserRouter , Route,Routes} from 'react-router-dom'
import Login from '../components/login'
import Signup from '../components/signin'

const Routers = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route path="login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routers