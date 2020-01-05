import React from 'react'
import { Link } from 'react-router-dom'
import { toJS } from 'mobx'

const Card = ({ item }) => {
    const data = item.movie ? item.movie : item
    return <li>
        <Link to={`/movies/details/${data.ids.slug}`}>
            {data.title}
        </Link> <small>{data.year}</small>
    </li>

}

export default Card