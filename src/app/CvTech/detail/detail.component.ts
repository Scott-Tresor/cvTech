import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { ActivatedRoute } from '@angular/router';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    personne: Personne;
    constructor(private cv: CvService, private activeRouter: ActivatedRoute) { }

    ngOnInit(): void {
        this.activeRouter.params.subscribe(
            (params)=>{
                this.personne = this.cv.getById(params.id);
            }
        );
    }
}
