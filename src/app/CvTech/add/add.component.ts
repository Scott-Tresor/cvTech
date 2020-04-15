import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    personne: Personne[];
    name: string;

  constructor() { }

  ngOnInit(): void {
  }

  addPersonne()
  {
    console.log({name: this.name});
  }
}
