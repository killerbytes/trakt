import AuthStore from './auth';
import CollectionStore from './collection';
import MovieStore from './movie';
import PeopleStore from './people';
import services from 'services';

export default {
  authStore: new AuthStore({ api: services.authServices }),
  collectionStore: new CollectionStore({ api: services.collectionServices }),
  movieStore: new MovieStore({ api: services.movieServices }),
  peopleStore: new PeopleStore({ api: services.peopleServices }),
};
