import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routeur',
  templateUrl: './routeur.component.html',
  styleUrls: ['./routeur.component.css']
})
export class RouteurComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getToComponent(route){
    const link = [route];
    this.router.navigate(link);
  }

}
