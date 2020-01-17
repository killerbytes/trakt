import AuthStore from './auth';
import CollectionStore from './collection';
import MovieStore from './movie';
import PeopleStore from './people';
import services from 'services';
import ShowStore from './show';
import TMDBStore from './tmdb';

export default {
  authStore: new AuthStore({ api: services.authServices }),
  collectionStore: new CollectionStore({ api: services.collectionServices }),
  movieStore: new MovieStore({ api: services.movieServices }),
  showStore: new ShowStore({ api: services.showServices }),
  peopleStore: new PeopleStore({ api: services.peopleServices }),
  tmdbStore: new TMDBStore({ api: services.tmdbServices }),
};
