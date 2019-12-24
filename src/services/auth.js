class AuthServices {
  constructor({ http }) {
    this.http = http;
    this.url = process.env.REACT_APP_API_SERVER;
  }

  getToken = (payload) => {
    return this.http.post(`${this.url}/oauth/token`, payload);
  };
}

export default AuthServices;
