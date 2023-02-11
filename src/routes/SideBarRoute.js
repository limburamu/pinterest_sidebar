import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateIdeaPin from '../components/CreateIdeaPin'
import CreatePin from '../components/CreatePin'
import New from '../components/New'
import Create from '../components/Create'
import SideBar from '../components/SideBar'

const SideBarRoute = () => {
  return (
    <SideBar>
      <Routes>
        <Route path='/create' element={<Create />} >
        <Route path='/create/createideapin' element={<CreateIdeaPin />} />
        <Route path='/create/createpin' element={<CreatePin />} />
        <Route path='/create/pin' element={<New />} />
        </Route>
      </Routes>
    </SideBar>
  )
}

export default SideBarRoute
