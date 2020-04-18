import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    readonly api = 'http://localhost:3000/api/Users/login';
    constructor(private http: HttpClient) { }

    login(credantials)
    {
        return this.http.post(this.api, credantials);
    }
}
