import { decorate, observable } from "mobx";

class BaseStore {
    constructor(props) {
        this.api = props.api;
    }
    LIST = []

    list = (type, period) => {
        return new Promise((resolve, reject) => {
            this.api.list(type, period).then(res => {
                console.log(res)
                this.LIST = res
                resolve(res)
            }).catch(err => reject(err))
        })
    }

}

export default decorate(BaseStore, {
    LIST: observable
})