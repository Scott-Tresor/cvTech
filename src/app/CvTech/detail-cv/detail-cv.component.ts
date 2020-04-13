import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: []
})
export class DetailCvComponent implements OnInit {

    @Input() personne: Personne;

    constructor() {}

    ngOnInit(){
    }
}
