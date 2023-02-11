import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = ({ children }) => {
    const menuItem = [
       
        {
            path: '/createideapin',
            name: 'CreateIdeaPin'
        },
        {
            path: '/createPin',
            name: 'CreatePin'
        },
        {
            path: '/new',
            name: 'New'
        }
    ]

    return (
        <div className='container'>
            <div className='sidebar'>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className='link' activeclassname='active'>
                            <div className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
                <main>{children}</main>
            </div>
        </div>
    )
}

export default SideBar
