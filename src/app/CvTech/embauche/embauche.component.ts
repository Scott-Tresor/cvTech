import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { EmbaucheService } from '../embauche.service';

@Component({
    selector: 'app-embauche',
    templateUrl: './embauche.component.html',
    styleUrls: []
})
export class EmbaucheComponent implements OnInit {

    personnes: Personne[];
    constructor(private embauche: EmbaucheService) {}

    ngOnInit(): void {
        this.personnes = this.embauche.getPersonne();
    }
}
