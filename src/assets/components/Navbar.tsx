import React from 'react'

const Navbar = () => {
  return (
    <div className='flex'>
        <div className='flex-1'>
            <h1>Navbar</h1> 
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Profile</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar