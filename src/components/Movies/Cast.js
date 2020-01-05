import React from 'react'
import { toJS } from 'mobx'
import { Link } from 'react-router-dom'

const Cast = ({ item }) => {
    return <li>
        <Link to={`/people/${item.person.ids.slug}`}>{item.person.name}</Link> - {item.character}
        {/* {JSON.stringify(item)} */}
    </li>
}

export default Cast