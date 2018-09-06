import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent {


 // userName: string;
 // sub: Subscription;

 user$;

  constructor(public userService: UserService) {
    this.user$ = userService.user$;
  }

  // ngOnInit() {
  //   this.sub = this.userService.user$.subscribe((user: User) => {
  //     this.userName = user.login;
  //   });
  // }
  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   this.sub.unsubscribe();
  //   // sub przechowuje referencje do subskrypcji
  // }

}
