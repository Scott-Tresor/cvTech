import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() navProperty;
  @Output() sendEventProperty = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.navProperty);
  }

  sendEvent()
  {
    this.sendEventProperty.emit(
      `veillez mettre les donnees a jour`
    );
  }

}
