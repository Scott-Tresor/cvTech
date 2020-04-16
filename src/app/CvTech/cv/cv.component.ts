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
        this.cvService.getPersonne().subscribe(
            (data)=> {
                this.personnes = data;
            },
            (error)=>{
                console.log(error);
                alert("L'api a  rencontrer un probleme");
                this.personnes = this.cvService.allPersonne();
            }
        );
    }

    ngOnInit() {
        this.user()
        this.premier.logger(this.personnes);
    }
}
