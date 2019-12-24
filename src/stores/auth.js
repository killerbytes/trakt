class AuthStore {
  constructor(props) {
    this.api = props.api;
  }

  getToken = (payload) => {
    return this.api.getToken(payload);
  };
}

export default AuthStore;
