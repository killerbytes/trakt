import React from 'react'
import { observer } from 'mobx-react-lite'
import { inject } from 'mobx-react'
import { toJS } from 'mobx'
import Cast from './Cast'

const MovieDetails = ({ match, movieStore }) => {
    const slug = match.params.slug
    const detail = movieStore.movieSummary
    const people = movieStore.people.cast.splice(0, 10)
    React.useEffect(() => {
        movieStore.getMovieSummary(slug, { extended: 'full' })
        movieStore.getPeople(slug)

    }, [movieStore, slug])

    return <div>MovieDetails
        <h1>{detail.title} <small>{detail.year}</small></h1>
        <p>{detail.overview}</p>
        <ul>
            {people.map((i, key) =>
                <Cast key={key} item={i} />
            )}
        </ul>

        {JSON.stringify(detail)}
        {JSON.stringify(people)}
    </div>
}

export default inject('movieStore')(observer(MovieDetails)) 