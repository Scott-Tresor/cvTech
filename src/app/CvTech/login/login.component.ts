import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  connexion(credantials)
  {
    this.auth.login(credantials).subscribe(
        (response)=>{
            let token = response['id'];
            localStorage.setItem('token', token);
            this.router.navigate(['/cv']);
        }
    );
  }
}
