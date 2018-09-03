import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  login: string;
  password: any;

  user: Array<{login: string, password: any}> = [];

  constructor(
    private userService: UserService) { }

  ngOnInit() {
  }

  setUser($event) {

    // this.login = $event.target.value;
    // console.log(this.login);

    const targetClassName = $event.target.className;

    if (targetClassName === 'login') {
      this.login = $event.target.value;
    }
    if (targetClassName === 'password') {
      this.password = $event.target.value;
    }
    console.log(this.user);
  }

  save() {
    this.userService.setUser(this.login);

  }






}
