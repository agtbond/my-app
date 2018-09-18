import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { User } from '../../models/user';
import { FormGroup, Validators, FormControl } from '../../../../node_modules/@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null)
    });
  }
  save() {
    const {login, password} = this.form.value;
    // const user: User = { login: this.form.value.login, password: this.form.value.password };
    // const user: User = { login: login, password: password };
    // jeżeli nazwa prop. jest taka jak nazwa wartoci:
    const user: User = { login, password };
    this.userService.setUser(user);
    this.router.navigate(['/dashboard']);
  }

  // Template driven form

  // onSubmit({value, valid}: {value: User, valid: boolean}) {
  //   // this.validate();
  //   console.log(this.user);
  // }

  // validate() {
  //   // let cloneUserObj = Object.assign({}, User, ob2);
  //   if (this.password === 'pass') {
  //     // console.log(this.password);
  //   }
  // }

}
