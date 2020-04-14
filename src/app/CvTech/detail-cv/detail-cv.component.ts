import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../../model/personne';
import { EmbaucheService } from '../embauche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: []
})
export class DetailCvComponent implements OnInit {

    @Input() personne: Personne;

    constructor(private embauche: EmbaucheService, private route: Router) {}

    ngOnInit(){
    }

    embaucher()
    {
        this.embauche.embaucher(this.personne);
    }

    moredetail()
    {
        let link = ['cv', this.personne.id];
        this.route.navigate(link);
    }
}
