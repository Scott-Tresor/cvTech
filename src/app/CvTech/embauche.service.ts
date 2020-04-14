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

    embaucher(user: Personne): void
    {
        let index = this.personne.indexOf(user);
        if (index < 0 ) {
            this.personne.push(user);
        } else {
            alert(`${user.name} est deja embaucher`);
        }
    }

    debaucher(user): void
    {
        let index = this.personne.indexOf(user);
        if (index >= 0) {
            this.personne.splice(index, 1);
        }
    }
}
