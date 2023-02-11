import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Personal from '../components/Personal';
import Address from '../components/Address';
import CreateIdeaPin from '../components/CreateIdeaPin';
import Create from '../components/Create';
import CreatePin from '../components/CreatePin';
import New from '../components/New';


const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/profile' element={<Profile />} >
        <Route path='/profile' element={<Personal />} />
        <Route path='/profile/address' element={<Address />} />
      </Route>


      <Route path='/' element={<Create />} />
        <Route path='/create' element={<CreateIdeaPin />} />
        <Route path='/create/createpin' element={<CreatePin />} />
        <Route path='/create/new' element={<New />} />  
       {/* </Route> */}

    </Routes>
  )
}

export default MainRoute
