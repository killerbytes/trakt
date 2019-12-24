class CollectionServices {
  constructor({ http }) {
    this.http = http;
    this.url = process.env.REACT_APP_API_SERVER;
  }

  getCollection = () => {
    return this.http.get(`${this.url}/sync/collection/movies`);
  };
}

export default CollectionServices;
