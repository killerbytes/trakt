import BaseStore from './base';

class TMDBStore extends BaseStore {
  constructor(props) {
    super(props);
    this.api = props.api;
  }

  getDetails = (id, type) => {
    return new Promise((resolve) => {
      this.api.getDetails(id, type).then((res) => {
        resolve(res.data);
      });
    });
  };
}

export default TMDBStore;
