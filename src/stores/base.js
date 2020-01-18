import { decorate, observable } from 'mobx';

class BaseStore {
  constructor(props) {
    this.api = props.api;
  }
  LIST = [];
  page = 1;
  people = { cast: [] };
  summary = {};
  pagination = {};

  list = (category, period, page, limit) => {
    return new Promise((resolve, reject) => {
      this.api
        .list(category, period, page, limit)
        .then(({ data, pagination }) => {
          console.log(data);
          this.LIST = data;
          this.pagination = pagination;
          resolve({ content: data, pagination });
        })
        .catch((err) => reject(err));
    });
  };

  getSummary = (id, payload) => {
    return new Promise((resolve, reject) => {
      this.api
        .get(id, payload)
        .then((res) => {
          this.summary = res.data;
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  };

  getPeople = (id, payload) => {
    return new Promise((resolve, reject) => {
      this.api
        .getByType(id, 'people', payload)
        .then((res) => {
          this.people = res.data;
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  };
}

export default decorate(BaseStore, {
  LIST: observable,
  page: observable,
  people: observable,
  summary: observable,
  pagination: observable,
});
