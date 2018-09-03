import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  login: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.login);
    this.userService.login$.subscribe(login => {
      this.login = login;
    });
  }

}
