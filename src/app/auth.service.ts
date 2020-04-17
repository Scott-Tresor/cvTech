import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    readonly api = '';
    constructor(private http: HttpClient) { }

    login(created)
    {
        return this.http.post(this.api,created);
    }
}
