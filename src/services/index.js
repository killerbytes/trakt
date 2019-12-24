import AuthServices from './auth';
import CollectionServices from './collection';
import Http from './http';
const http = new Http();

export default {
  authServices: new AuthServices({ http }),
  collectionServices: new CollectionServices({ http }),
};
