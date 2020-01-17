import AuthServices from './auth';
import CollectionServices from './collection';
import Http from './http';
import MovieServices from './movie';
import PeopleServices from './people';
import ShowServices from './show';
import TMDBServices from './tmdb';
const http = new Http();

export default {
  authServices: new AuthServices({ http }),
  collectionServices: new CollectionServices({ http }),
  movieServices: new MovieServices({ http }),
  showServices: new ShowServices({ http }),
  peopleServices: new PeopleServices({ http }),
  tmdbServices: new TMDBServices(),
};
