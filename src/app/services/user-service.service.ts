import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from '../../../node_modules/rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // user$: Subject<void> = new Subject<void>;

  // setUser(user: string): void {
  //   this.user$.next(user);
  // }

  // complete() {
  //   this.user$.complete();
  // }

   usersList: Array<User> = [];
  // user$: Subject<void> = new Subject();
   userObs = new BehaviorSubject<Array<User>>([]);


  constructor() {
    this.usersList = [
      {login: 'Agata', password: 'password'}
    ];
  }

  setUser(user: User) {
    // this.userObs.next(this.usersList);


    const userObj = this.userObs.getValue();
    userObj.push(user);
    this.userObs.next(userObj);
  }

  complete() {
    this.userObs.complete();
  }

}
