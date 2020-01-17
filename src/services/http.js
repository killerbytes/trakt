import axios from 'axios';
const APP_NAME = process.env.REACT_APP_APP_NAME;

const headers = (params) => {
  return {
    headers: {
      'content-type': 'application/json',
      'trakt-api-key': process.env.REACT_APP_CLIENT_ID,
      // 'Content-Type': 'application/json',
      // Authorization: 'Bearer 336f328d7fc926839224c18a2aa68c971d2ab5885db8a090e816328ce136dbd7',
      'trakt-api-version': 2,
      // 'trakt-api-key': `1f4b04c7f924405ea8fc1281ebe9644fd32aed9e34b8ec8a25510b2d7956af08`,

      ...params,
    },
  };
};

const responseParser = (res) => {
  const headers = res.headers;
  return {
    ...res,
    pagination: {
      itemCount: headers['x-pagination-item-count'],
      limit: headers['x-pagination-limit'],
      page: headers['x-pagination-page'],
      pageCount: headers['x-pagination-page-count'],
    },
  };
};
const errorParser = (res) => {
  console.error(res);
  return res.response;
};

export default class Http {
  constructor() {
    this.axiosInstance = axios.create({
      // eslint-disable-next-line no-undef
      baseURL: process.env.REACT_APP_API_SERVER,
    });

    this.axiosInstance.interceptors.response.use(
      function(config) {
        return config;
      },
      (error) => {
        console.log(error.message);
        if (error.message === 'Network Error') {
          // window.location = '/504';
          window.location = '/login';
        }

        const {
          response: { status = null },
        } = error;
        switch (status) {
          case 401:
            sessionStorage.setItem('REDIRECT', window.location.pathname);
            localStorage.removeItem(`${APP_NAME}_TOKEN`);
            window.location = '/login';
            break;
          default:
            break;
        }
        return Promise.reject(error);
      }
    );
  }

  getToken = () => {
    const { access_token } = JSON.parse(localStorage.getItem(`${APP_NAME}`)) || {};
    return access_token;
  };

  setToken = (token) => {
    localStorage.setItem(`${APP_NAME}_TOKEN`, token);
  };
  removeToken = () => {
    localStorage.removeItem(`${APP_NAME}_TOKEN`);
  };

  get = (url, payload = {}) => {
    const config = Object.assign(payload, headers({ Authorization: `Bearer ${this.getToken()}` }));
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .get(url, config)
        .then((res) => resolve(responseParser(res)))
        .catch((err) => {
          console.log(err);
          reject(errorParser(err));
        });
    });
  };
  post = (url, payload) => {
    const config = Object.assign(headers({ Authorization: `Bearer ${this.getToken()}` }), {});
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .post(url, payload, config)
        .then((res) => resolve(responseParser(res)))
        .catch((err) => reject(errorParser(err)));
    });
  };
  put = (url, payload) => {
    const config = Object.assign(headers({ Authorization: `Bearer ${this.getToken()}` }), {});
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .put(url, payload, config)
        .then((res) => resolve(responseParser(res)))
        .catch((err) => reject(errorParser(err)));
    });
  };
  delete = (url) => {
    const config = Object.assign(headers({ Authorization: `Bearer ${this.getToken()}` }), {});
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .delete(url, config)
        .then((res) => resolve(responseParser(res)))
        .catch((err) => reject(errorParser(err)));
    });
  };
}
