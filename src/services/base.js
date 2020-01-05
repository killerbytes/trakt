class BaseServices {
    constructor(props) {
        this.http = props.http;
        this.url = props.url;
    }
    get = (id, payload) => this.http.get(`${this.url}/${id}`, { params: payload })

    getByType = (id, type, payload) => this.http.get(`${this.url}/${id}/${type}`, { params: payload })

    list = (type, period) => {
        const params = period ? `${type}/${period}` : `${type}`
        return this.http.get(`${this.url}/${params}`);
    };



}

export default BaseServices;
