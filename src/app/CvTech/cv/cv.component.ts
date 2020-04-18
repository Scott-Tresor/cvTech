import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { PremierService } from '../../premier.service';
import { CvService } from '../cv.service';
import sweetAlert from 'sweetalert2';

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
                sweetAlert.fire('Error', 'Impossible de se connecter a la base des donnees', 'warning')
                this.personnes = this.cvService.allPersonne();
            }
        );
    }

    ngOnInit() {
        this.user()
        this.premier.logger(this.personnes);
    }
}
