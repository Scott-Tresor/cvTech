import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../../model/personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: []
})
export class DetailCvComponent implements OnInit {

    @Input() personne: Personne;

    constructor(private embauche: EmbaucheService) {}

    ngOnInit(){
    }

    embaucher()
    {
        this.embauche.embaucher(this.personne);
    }
}
