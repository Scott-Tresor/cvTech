import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../cv.service';
import sweetAlert from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    personne: Personne = null;

  constructor(private activeRouter: ActivatedRoute, private cv: CvService, private router: Router) { }

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

  updatePersonne()
  {
    this.cv.updatePersonne(this.personne).subscribe(
        response=>{
            sweetAlert.fire('Succès', 'Personne modifier avec succee', 'success');
            this.router.navigate(['cv']);
        },
        error =>{
            sweetAlert.fire('Error', 'Impossible de modifier la personne', 'warning')
        }
    );
  }

}
