import React from 'react'
import { Toaster } from 'react-hot-toast'
import Nav from "./Components/Nav"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import Home from './Pages/Home'
import { AnimatePresence } from "framer-motion"
import { useSelector } from 'react-redux'
import LogedIn from './Pages/LogedIn'
import Auth from './Pages/Auth'
import Login from './Pages/Auth/Login/Index'
import Register from './Pages/Auth/Register/Index'
import Quiz from "./Pages/Quiz"
export default function App() {
  const { token } = useSelector(state => state.auth)
  const location = useLocation()
  return (
    <>
      <Nav />
      <main className='min-h-screen w-full bg-linear-to-br from-blue-200 via-gray-700 to-neutral-900'>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={token ? <LogedIn/> : <Auth/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/Quiz' element={<Quiz/>}/>
          </Routes>
        </AnimatePresence>


      </main>
      <Toaster />

    </>
  )
}
