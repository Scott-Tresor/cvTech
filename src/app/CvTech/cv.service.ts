import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CvService {
    private personne: Personne[];
    readonly api = 'http://localhost:3000/api/personnes';
    constructor(private http: HttpClient) {

    }
    allPersonne(){
        return this.personne = [
            new Personne(1, 'scott', 'tresor', 25, 'nest.png', 'developpeur', 77777),
            new Personne(2, 'kasenda', 'tresor', 24, 'nest.png', 'Teacher ', 77778)
        ];
    }

    getPersonne(): Observable<Personne[]>
    {
        return this.http.get<Personne[]>(this.api);
    }

    addPersonne(personne: Personne): Observable<Personne>
    {
        let token = localStorage.getItem('token');
        if (token) {
            let params = new HttpParams()
                .set('access_token', token);
                return this.http.post<Personne>(this.api, personne, {params});
        }
        return this.http.post<Personne>(this.api, personne);
    }
    deletePersonne(id: number): Observable<Personne>
    {
        return this.http.delete<Personne>(this.api + `/${id}`);
    }

    getById(idd: number): Observable<Personne>
    {
        return this.http.get<Personne>(this.api + `/${idd}`);
    }

    updatePersonne(personne: Personne): Observable<Personne>
    {
        return this.http.put<Personne>(this.api, personne);
    }

    getbyName(personne: Personne): Observable<Personne[]>
    {
        let filter = `{"where": {"name": {"like": "%${personne}%"}}}`;
        let params = new HttpParams().set('filter', filter);
        return this.http.get<Personne[]>(this.api, {params});
    }
}
