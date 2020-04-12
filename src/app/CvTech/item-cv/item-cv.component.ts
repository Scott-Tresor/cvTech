import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() personne: Personne;

  constructor() { }

  ngOnInit() {
    console.log(this.personne.name);
  }

}
