import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {UserForm} from '../entities/user.entites';
import {Observable} from 'rxjs/Observable';
import {API_URL_SPRING} from '../app.component';

@Injectable()
export class usersservice {


    constructor(public http: Http) {

    }

    /*
        submitData(formGroup) {
            const URL = 'http://192.168.1.7:8080/usersave';
            const Res = this.http.post(URL, formGroup).map(res => res.json());
            return Res
        }
    */

    /*
        create(account: UserForm): Observable<any> {
            return this.http.post(this.BASE_URL , account).map(resp => resp.json())
        }*/

    create(account: UserForm): Observable<any> {
        return this.http.post(API_URL_SPRING + '/usersave', account)
            .map(
                (res: Response) => {
                    return {status: res.status, result: res.json()}
                }
            )
    }

    /*
        login(account: UserForm): Observable<any> {
            return this.http.post(this.BASE_URL2, account)
                .map(
                    (res: Response) => {
                        return {status: res.status, result: res.json()}
                    }
                )
        }*/

    getListUsers() {
        return this.http.get(API_URL_SPRING + '/usersLista')
            .map(resp => resp.json())
    }

}