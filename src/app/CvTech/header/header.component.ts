import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

    visibility = true;
  constructor(public auth: AuthService) { }

  ngOnInit(){
  }

  logout()
  {
    this.auth.logout();
  }

  onClick()
  {
    this.visibility = ! this.visibility;
  }

}
