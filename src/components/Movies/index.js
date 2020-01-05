import React from 'react'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import { PATH } from "definitions";
import Card from './Card'
import { toJS } from 'mobx';

const Movies = ({ match, movieStore }) => {
    const type = match.params.type
    React.useEffect(() => {
        switch (type) {
            case 'collected':
            case 'watched':
                movieStore.list(type, 'weekly')
                break;
            default:
                movieStore.list(type)

        }

    }, [movieStore, type])
    return <div>Movies

        <ul>
            <li><NavLink to={`/${PATH.movies}/trending`}>Trending</NavLink></li>
            <li><NavLink to={`/${PATH.movies}/popular`}>Popular</NavLink></li>
            <li><NavLink to={`/${PATH.movies}/watched`}>Watched</NavLink></li>
            <li><NavLink to={`/${PATH.movies}/collected`}>Collected</NavLink></li>
            <li><NavLink to={`/${PATH.movies}/anticipated`}>Anticipated</NavLink></li>
            <li><NavLink to={`/${PATH.movies}/boxoffice`}>Box Office</NavLink></li>
        </ul>

        <div>
            <ul>

                {movieStore.LIST && movieStore.LIST.map((i, key) => <Card item={i} key={key} />)}
            </ul>
        </div>

    </div>
}

export default inject('movieStore')(observer(Movies))