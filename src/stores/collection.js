import { decorate, observable } from 'mobx';

class CollectionStore {
  constructor(props) {
    this.api = props.api;
  }
  items = [];

  getCollection = () => {
    return new Promise((resolve, reject) => {
      this.api.getCollection().then((res) => {
        this.items = res;
        resolve(res);
      });
    });
  };
}

export default decorate(CollectionStore, {
  items: observable,
});
