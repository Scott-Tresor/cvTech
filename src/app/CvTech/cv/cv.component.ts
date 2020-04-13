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
    user(){
        this.personnes = [
            new Personne(1, 'scott', 'tresor', 25, 'cott.jpg', 'developpeur', 77777),
            new Personne(2, 'kasenda', 'tresor', 24, 'Sott.jpg', 'Teacher ', 77778),
            new Personne(3, 'Meshack', 'Irung', 23, 'trott.jpg', 'Web design', 77779),
            new Personne(4, 'Franck', 'Kasenda', 22, '', 'Web master', 77780)
        ];
    }

    ngOnInit() {
        this.user()
    }
}
