import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from 'definitions'


const Header = () => <header>
    <nav>
        <NavLink to={`/${PATH.shows}/trending`}>TV</NavLink>
        <NavLink to={`/${PATH.movies}`}>Movies</NavLink>
        <NavLink to="/calendars">Calendar</NavLink>
    </nav>
</header>
export default Header