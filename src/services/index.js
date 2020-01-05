import AuthServices from './auth';
import CollectionServices from './collection';
import MovieServices from './movie';
import PeopleServices from './people';
import Http from './http';
const http = new Http();

export default {
  authServices: new AuthServices({ http }),
  collectionServices: new CollectionServices({ http }),
  movieServices: new MovieServices({ http }),
  peopleServices: new PeopleServices({ http })
};
