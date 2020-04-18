import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {

    searchPersonne: Personne[];
  constructor() { }

  ngOnInit(): void {
  }

  search(data)
  {
    console.log(data.value);
  }

  selectPersonne(personne: Personne)
  {

  }
}
