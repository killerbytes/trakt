import AuthStore from './auth';
import CollectionStore from './collection';
import services from 'services';

export default {
  collectionStore: new CollectionStore({ api: services.collectionServices }),
  authStore: new AuthStore({ api: services.authServices }),
};
