import BaseServices from "./base";

class MovieServices extends BaseServices {
    constructor(props) {
        props.url = '/people';
        super(props);
        this.url = props.url;
        this.http = props.http;
    }

    list = (id, type) => {
        this.http.get(`${this.url}/${id}/${type}`)
    }


}

export default MovieServices