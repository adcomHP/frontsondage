import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {UserForm} from '../entities/user.entites';
import {Observable} from 'rxjs/Observable';
import {API_URL_SPRING} from '../app.component';

@Injectable()
export class AuthService {
    isLoggedIn = false;

    constructor(private http: Http) {
    }

    private static handleError(error: any) {
        const errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }

    login(user: UserForm): Observable<boolean> {
        return this.http.post(API_URL_SPRING + '/loginn', user)
            .map(response => response.json())
            .map((currentUser: UserForm) => {
                if (!UserForm.isNull(currentUser)) {
                    this.isLoggedIn = true;
                    return true;
                } else {
                    this.isLoggedIn = false;
                    return false;
                }
            })
    }

    register(user: UserForm): Observable<boolean> {
        return this.http.post(API_URL_SPRING + '/registerr', user)
            .map(response => response.json() as UserForm)
            .map(currentUser => !UserForm.isNull(currentUser));

    }
}