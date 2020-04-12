import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];

  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1,'scott','tresor',25,'cott.jpg','developpeur',77777),
      new Personne(2,'ilunga','kasenda',26,'ilunga.jpg','ingenieur',34567),
    ];
  }

}
