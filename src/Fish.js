import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Fish = () => {
    return (
        <div >
            <h1>fish</h1>
            <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
                <Link to='/fish/salmon'> salmon</Link >
                <br></br><hr></hr>
                <Link to='/fish/amnon'> amnon</Link >
            </nav>
            <Outlet />
        </div>
    )
}

export default Fish