class BaseServices {
  constructor(props) {
    this.http = props.http;
    this.url = props.url;
  }
  get = (id, payload) => this.http.get(`${this.url}/${id}`, { params: payload });

  getByType = (id, type, payload) => this.http.get(`${this.url}/${id}/${type}`, { params: payload });

  list = (type, period, page = 1, limit = 20) => {
    const params = period ? `${type}/${period}` : `${type}`;
    return this.http.get(`${this.url}/${params}`, {
      params: {
        extended: 'full',
        page,
        limit,
      },
    });
  };
}

export default BaseServices;
