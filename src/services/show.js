import BaseServices from './base';

class ShowServices extends BaseServices {
  constructor(props) {
    props.url = '/shows';
    super(props);
    this.url = props.url;
    this.http = props.http;
  }
}

export default ShowServices;
