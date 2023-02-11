import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

// import SideBarRoute from '../routes/SideBarRoute'
import SideBar from './SideBar'


const Create = () => {
  return (
    <div>
        {/* <div>
            <Link to='/create'>CreateIdeaPin</Link>
            <Link to='/create/createpin'>CreatePin</Link>
            <Link to='/create/new'>New</Link>
        </div> */}
        <Outlet />
        {/* <SideBarRoute /> */}
        {/* <SideBar /> */}
    </div>
  )
}

export default Create