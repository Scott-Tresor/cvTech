import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CvService {
    private personne: Personne[];
    readonly api = '';
    constructor(private http: HttpClient) {

    }
    allPersonne(){
        this.personne = [
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
        return this.http.post<Personne>(this.api, personne);
    }
    delete(id: number): Observable<Personne>
    {
        return this.http.delete<Personne>(this.api + '/${id}');
    }

    getById(idd: number): Observable<Personne>
    {
        return this.http.get<Personne>(this.api + '/${id}');
    }
}
