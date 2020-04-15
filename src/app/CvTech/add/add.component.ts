import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { CvService } from '../cv.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    personne: Personne[];

    constructor(private cv: CvService) { }

    ngOnInit(): void {
    }

    addPersonne(formulaire: NgForm)
    {
        this.cv.addPersonne(formulaire.value);
    }
}
