import { decorate, observable } from 'mobx';
import BaseStore from './base';

class MovieStore extends BaseStore {
  constructor(props) {
    super(props);
    this.api = props.api;
  }
}

export default decorate(MovieStore, {});
