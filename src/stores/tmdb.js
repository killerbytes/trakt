import BaseStore from './base';

class TMDBStore extends BaseStore {
  constructor(props) {
    super(props);
    this.api = props.api;
  }

  getDetails = (ids, type) => {
    return new Promise((resolve) => {
      this.api.getDetails(ids.tmdb, type).then((res) => {
        resolve(res.data);
      });
      // .catch((err) => console.log(toJS(ids), type, err));
    });
  };
}

export default TMDBStore;
