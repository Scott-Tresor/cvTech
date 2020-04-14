import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
    private personne: Personne[];
    constructor() {
        this.allPersonne();
    }
    allPersonne(){
        this.personne = [
            new Personne(1, 'scott', 'tresor', 25, 'nest.png', 'developpeur', 77777),
            new Personne(2, 'kasenda', 'tresor', 24, 'nest.png', 'Teacher ', 77778),
            new Personne(3, 'Meshack', 'Irung', 23, 'trott.jpg', 'Web design', 77779),
            new Personne(4, 'Franck', 'Kasenda', 22, '', 'Web master', 77780)
        ]
    }

    getPersonne(): Personne[]
    {
        return this.personne;
    }

    getById(idd: number): Personne
    {
        const user = this.personne.find(user=>{
            return user.id == idd;
        });
        return user;
    }
}
