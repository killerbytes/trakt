import { decorate, observable } from 'mobx';

class PeopleStore {
  constructor(props) {
    this.api = props.api;
  }
  summary = {};
  credits = [];

  get = (id, payload) => {
    this.summary = {};
    this.credits = [];
    return new Promise((resolve, reject) => {
      this.api.get(id, payload).then((res) => {
        this.summary = res.data;
        resolve(res);
      });
    });
  };
  getCredits = (id, type, payload) => {
    return new Promise((resolve, reject) => {
      Promise.all([this.api.getByType(id, 'movies', payload), this.api.getByType(id, 'shows', payload)]).then((res) => {
        this.credits = res.reduce((acc, value) => {
          return [...acc, ...value.data.cast];
        }, []);
        resolve(this.credits);
      });
    });
  };
}

export default decorate(PeopleStore, {
  summary: observable,
  credits: observable,
});
