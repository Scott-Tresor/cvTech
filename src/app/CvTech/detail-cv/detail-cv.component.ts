import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

    @Input() personne: Personne;

    constructor() {}

    ngOnInit(): void {
        console.log(this.personne.firstname);

    }
}
