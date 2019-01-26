export class StorageService {
    constructor(){

    }
    add(key, value){
        this.remove(key);
        if (value) {
            value = JSON.stringify(value);
            value = btoa(value);
        }
        localStorage.setItem(key, value);
    }

    get(key){
        let value = localStorage.getItem(key);
        if (value !== undefined && value !== null){
            try {
                value = atob(value);
                return JSON.parse(value);
            } catch (e) {
                return null;
            }
        }
        return null;
    }
    remove(key){
        localStorage.removeItem(key);
    }
}