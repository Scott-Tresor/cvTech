import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: []
})
export class CvComponent implements OnInit {

    personnes: Personne[];

    selectedPersonne: Personne;

    constructor() {}

    selectPersonne(personne) {
        this.selectedPersonne = personne;
    }

    ngOnInit() {
        this.personnes = [
            new Personne(1, 'scott', 'tresor', 25, 'cott.jpg', 'developpeur', 77777),
            new Personne(2, 'scott', 'tresor', 24, 'Sott.jpg', 'developpeur', 77778),
            new Personne(3, 'scott', 'tresor', 23, 'trott.jpg', 'developpeur', 77779),
            new Personne(4, 'scott', 'tresor', 22, 'vott.jpg', 'developpeur', 77780)
        ];
    }
}
