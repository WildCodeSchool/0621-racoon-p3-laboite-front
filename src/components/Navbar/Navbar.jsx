import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import User from '../../assets/user-icon.png'

import './Navbar.css'

const Navbar = () => {

const [data, setData] = useState()

useEffect(() => {
axios.get(`http://localhost:4000/pole`).then(res => setData(res.data))
}, [])

data && console.log(data)
return (
<div className='flex navlist'>
    <div>
        <p style={{ color: '#EB5160' }}>N</p>
    </div>
    <div>
        <p>
            <NavLink to='/'>Le Concept</NavLink>
        </p>
    </div>
    {data &&
    // e ???
    data.map(e => (
        <div key={e.id}>
            <p>
                <NavLink to={`/pole/${e.id}`}>{e.pole_name}</NavLink>
            </p>
        </div>
    ))}
    <div>
        <p>
            <NavLink to='/partenaires'>Partenaires</NavLink>
        </p>
    </div>
    <div>
        <NavLink className='user-icon' to={'/login'}>
            <img src={User} alt='user' />
        </NavLink>
    </div>
</div>
)
}

export default Navbar
