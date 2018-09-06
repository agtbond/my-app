import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-edit-username',
  templateUrl: './edit-username.component.html',
  styleUrls: ['./edit-username.component.css']
})
export class EditUsernameComponent implements OnInit {

  newLogin;

  tablica: any[] =  [1, 2, 3, 4];
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  change(event) {
    this.newLogin = event.target.value;
    const user: User = ({ login: this.newLogin});
    this.userService.setUser(user);
    console.log(this.newLogin);
  }
}
