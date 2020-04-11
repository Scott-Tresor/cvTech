import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() personnes: Personne;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.personnes)
  }

}
