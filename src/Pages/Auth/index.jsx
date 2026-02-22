import React, { useState } from 'react'
import Login from './Login/Index'
import Register from './Register/Index'

export default function Auth() {
  const [pageType, setPageType] = useState("login")
  const handlePageType = () => {
    setPageType(pageType == "login" ? "register" : "login")

  }
  return (
    <>
      {pageType == "login" ? (<Login handlePageType={handlePageType} />) : (<Register handlePageType={handlePageType} />)}

    </>
  )
}
