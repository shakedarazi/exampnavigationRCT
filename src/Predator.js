import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Predator = () => {
  return (
    <div >
      <h1>predator</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to='/predator/lion'> lion</Link >
        <br></br><hr></hr>
        <Link to='/predator/tigris'> tigris</Link >
      </nav>
      <Outlet />
    </div>
  )
}

export default Predator