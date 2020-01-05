import BaseServices from "./base";

class MovieServices extends BaseServices {
    constructor(props) {
        props.url = '/movies';
        super(props);
        this.url = props.url;
        this.http = props.http;
    }



}

export default MovieServices