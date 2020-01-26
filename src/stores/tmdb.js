import { getImage } from 'utils/image';
import { IMAGE } from 'definitions';
import BaseStore from './base';

const blank = {
  backdrop_path: getImage(IMAGE.BLANK.FULL),
  poster_path: getImage(IMAGE.BLANK.PORTRAIT),
};
class TMDBStore extends BaseStore {
  constructor(props) {
    super(props);
    this.api = props.api;
  }

  getDetails = (ids, type) => {
    return new Promise((resolve, reject) => {
      let data = {};
      this.api
        .getDetails(ids.tmdb, type)
        .then((res) => {
          data = res.data;
        })
        .catch(() => (data = blank))
        .finally(() => {
          const { poster_path, backdrop_path, profile_path } = data;
          if (!profile_path) {
            data.profile_path = blank.poster_path;
          }
          if (!poster_path) {
            data.poster_path = blank.poster_path;
          }
          if (!backdrop_path) {
            data.backdrop_path = blank.backdrop_path;
          }
          resolve(data);
        });
    });
  };
}

export default TMDBStore;
