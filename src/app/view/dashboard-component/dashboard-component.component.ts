import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  usersList: Array<User> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.userObs.subscribe((usersList: Array<User>) => {
      this.usersList = usersList;

      console.log(this.usersList);
    });
  }

}
