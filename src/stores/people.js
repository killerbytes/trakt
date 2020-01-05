import { decorate, observable } from 'mobx';

class PeopleStore {
  constructor(props) {
    this.api = props.api;
  }
  summary = {}
  credits = { cast: [] }

  get = (id, payload) => {
    return new Promise((resolve, reject) => {

      this.api.get(id, payload).then(res => {
        this.summary[id] = res
        resolve(res)
      })
    })
  }
  getCredits = (id, type, payload) => {
    return new Promise((resolve, reject) => {

      this.api.getByType(id, type, payload).then(res => {
        this.credits = res
        resolve(res)
      })
    })
  }
}

export default decorate(PeopleStore, {
  summary: observable,
  credits: observable
})
