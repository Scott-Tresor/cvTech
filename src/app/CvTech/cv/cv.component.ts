import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { PremierService } from '../../premier.service';
import { CvService } from '../cv.service';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: []
})
export class CvComponent implements OnInit {

    personnes: Personne[];
    selectedPersonne: Personne;

    constructor(private premier: PremierService, private cvService: CvService) {}

    selectPersonne(personne) {
        this.selectedPersonne = personne;
    }
    user(){
        this.personnes = this.cvService.getPersonne();
    }

    ngOnInit() {
        this.user()
        this.premier.logger(this.personnes);
    }
}
