import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {
    username: "",
    password: ""
  }
  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.user).then((res) => {
      if (res.user.email === 'admin@gmail.com') {
        this.route.navigate(['admin']);
      } else if (res.user.email === 'consultor@gmail.com') {
        this.route.navigate(['consultor']);
      } else {
        this.route.navigate(['home']);
      }
    }).catch(err => console.log('err', err));
  }
}
