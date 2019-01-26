import {AppConfig} from "../config/app.config";
import {StorageService} from "./storage.service";

export class LoginService {
    constructor() {
        this.config = AppConfig;
    }

    async login(email, password) {
        const params = {
            method: 'POST',
            email: email,
            password: password,
            apiKey: this.config.config.apiKey
        };
        return await fetch(this.config.config.apiUrl + 'login', params).then(response => {
            console.log(response.json());
        });
    }
}