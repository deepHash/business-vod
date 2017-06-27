import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BusinessService {
    constructor(private http:Http) { }
    apiUrl:string = 'https://targill12017.herokuapp.com';
    //headers = new Headers();

    getAllNames() {
        return this.http.get(`${this.apiUrl}/getAllNames`)
            .map(res => res.json());
    }

    getCompany(id: number) {
        return this.http.post(`${this.apiUrl}/getCompany`, {profile_id:id})
            .map(res => res.json());
    }

    getCompanyByCityDevices(city, devices) {
        return this.http.get(`${this.apiUrl}/getCompanyByCity&Devices/${city}/${devices}`)
            .map(res => res.json());
    }
}