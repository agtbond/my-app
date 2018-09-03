import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  user: Array<{login: string, password: any}> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.user$.subscribe((user) => {
      //this.user = user;
      console.log('test');
      console.log(user);
    });
  }

}
