import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>

            <nav className='flex justify-between bg-zinc-700 py-4 px-8 rounded-full text-white text-lg '>

                <div>Omkar Patil</div>

                <ul className='flex space-x-10'>
                    <li> <NavLink to={'/home'} className='hover:text-zinc-300'>Home</NavLink> </li>
                    <li> <NavLink to={'/'} className='hover:text-zinc-300'>Create</NavLink> </li>
                </ul>

                <div>MERN CRUD</div>

            </nav>

        </div>
    )
}

export default NavBar