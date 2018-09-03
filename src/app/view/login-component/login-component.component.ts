import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  login: string;
  password: string;

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
  }

  save() {
    // this.userService.setUser(this.login);

    const user: User = ({ login: this.login, password: this.password });
    this.userService.setUser(user);
  }






}
