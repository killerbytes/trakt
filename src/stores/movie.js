import BaseStore from './base'
import { decorate, observable } from 'mobx';

class MovieStore extends BaseStore {
    constructor(props) {
        super(props);
        this.api = props.api;
    }
    movieSummary = {}
    people = { cast: [] }

    getMovieSummary = (id, payload) => {
        return new Promise((resolve, reject) => {

            this.api.get(id, payload).then(res => {
                this.movieSummary = res
                resolve(res)
            })
        })
    }

    getPeople = (id, payload) => {
        return new Promise((resolve, reject) => {
            this.api.getByType(id, 'people', payload).then(res => {
                this.people = res
                console.log(this.people)
                resolve(res)
            })
        })
    }



}

export default decorate(MovieStore, {
    movieSummary: observable,
    people: observable
})