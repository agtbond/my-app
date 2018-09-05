import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { User } from '../../models/user';
import { FormGroup, Validators, FormControl } from '../../../../node_modules/@angular/forms';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  login: string;
  password: string;
  form: FormGroup;
  user: User;




  constructor(private userService: UserService) { }

  ngOnInit() {

    console.log(this.user);
    // this.form = new FormGroup({
    //   login: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    //   password: new FormControl(null)
    // });
  }
  // save() {
  //   const user: User = ({ login: this.form.value.login, password: this.form.value.password });
  //  this.userService.setUser(user);
  // }

  // Template driven form

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    // this.validate();
    console.log(this.user);
  }

  validate() {
    // let cloneUserObj = Object.assign({}, User, ob2);
    if (this.password === 'pass') {
      // console.log(this.password);
    }
  }

}
