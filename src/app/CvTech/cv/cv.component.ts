import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { PremierService } from '../../premier.service';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: [],
    providers: [PremierService]
})
export class CvComponent implements OnInit {

    personnes: Personne[];
    selectedPersonne: Personne;

    constructor(private premier: PremierService) {}

    selectPersonne(personne) {
        this.selectedPersonne = personne;
    }
    user(){
        this.personnes = [
            new Personne(1, 'scott', 'tresor', 25, 'nest.png', 'developpeur', 77777),
            new Personne(2, 'kasenda', 'tresor', 24, 'nest.png', 'Teacher ', 77778),
            new Personne(3, 'Meshack', 'Irung', 23, 'trott.jpg', 'Web design', 77779),
            new Personne(4, 'Franck', 'Kasenda', 22, '', 'Web master', 77780)
        ];
    }

    ngOnInit() {
        this.user()
        this.premier.logger(this.personnes);
    }
}
