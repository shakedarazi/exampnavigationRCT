import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Bird = () => {
    return (
        <div >
            <h1>bird</h1>
            <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
                <Link to='/bird/eagle'> eagle</Link >
                <br></br><hr></hr>
                <Link to='/bird/wagtail'> wagtail</Link >
            </nav>
            <Outlet/>
        </div>
    )
}

export default Bird