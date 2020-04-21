import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {

    searchPersonne: Personne[];
  constructor(private cv: CvService, private router: Router) { }

  ngOnInit(): void {
      this.searchPersonne =[];
  }

  search(data)
  {
    let name = data.value;
    name = name.trim();
    if (name.lenght) {
        this.cv.getbyName(name).subscribe(
            personne=>{
                console.log(personne);

                this.searchPersonne = personne;
            }
        );
    } else {
        this.searchPersonne = []
    }
  }

  selectPersonne(personne: Personne)
  {
    this.router.navigate(['cv', personne.id]);
  }
}
