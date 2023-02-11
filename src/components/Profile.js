import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
// import SideBar from './SideBar';

const Profile = () => {
  return (
    <div>
      <div>
        <Link to='/profile'>Personal Information</Link>
        <Link to='/profile/address'>Address Information</Link>
      </div>
      <Outlet />
    </div>
    
  )
}

export default Profile
