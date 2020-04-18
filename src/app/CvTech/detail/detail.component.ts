import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../../model/personne';
import sweetAlert from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    personne: Personne;
    constructor(private cv: CvService, private activeRouter: ActivatedRoute, private route: Router) { }

    ngOnInit(): void {
        this.activeRouter.params.subscribe(
            (personne)=>{
                this.cv.getById(personne.id).subscribe(
                    data=>{
                        this.personne = data;
                    }
                );
            }
        );
    }

    deletePersonne()
    {
        this.cv.deletePersonne(this.personne.id).subscribe(
            response=>{
                console.log(response);
                this.route.navigate(['/cv']);
            },
            error=>{
                sweetAlert.fire(
                    'Oups',
                    `Impossible de supprimer cette personne ${error}`,
                    'warning'
                );
            }
        );
    }

    updatePersonne()
    {
        this.route.navigate(['cv/updatecv', this.personne.id]);
    }
}
