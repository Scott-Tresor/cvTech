import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { CvService } from '../cv.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
        let index = ['cv'];
        this.cv.addPersonne(formulaire.value);
        this.route.navigate(index);
    }
}
