import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HeaderStyles.css';


const Header = () => {
    return (
        <div className='header'>
            <div>
                <ul className='header-menu'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/create'>Create</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
