import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from '../../../node_modules/rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   usersList: Array<User> = [];
   userObs = new BehaviorSubject<Array<User>>([]);
   // posiada metodę getValue; Subject nie ma

   constructor(private router: Router) {
   }

  setUser(user: User) {
    const userObj = this.userObs.getValue();
    userObj.push(user);
    this.userObs.next(userObj);
    this.router.navigate(['/dashboard']);
  }

  error() {
  }
  complete() {
    this.userObs.complete();

  }
}
