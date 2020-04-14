import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
    private personne: Personne[];
    constructor() {
        this.personne = [];
    }

    getPersonne(): Personne[]
    {
        return this.personne;
    }

    embaucher(personne: Personne): void
    {
        let index = this.personne.indexOf(personne);
        if (index < 0 ) {
            this.personne.push(personne);
        } else {
            alert(`${personne.name} est deja embaucher`);
        }
    }
}
