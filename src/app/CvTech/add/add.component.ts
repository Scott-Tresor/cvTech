import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { CvService } from '../cv.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import sweetAlert from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    personne: Personne[];

    constructor(private cv: CvService, private route: Router) { }

    ngOnInit(): void {
    }

    addPersonne(formulaire: NgForm)
    {
        this.cv.addPersonne(formulaire.value).subscribe(
            data=>{
                this.route.navigate(['/cv']);
                console.log(data);
            },
            error=>{
                sweetAlert.fire('Error', 'Probleme de connexion a votre server', 'warning')
            }
        );
    }
}
