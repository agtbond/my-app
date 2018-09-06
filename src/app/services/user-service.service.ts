import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from '../../../node_modules/rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   user$ = new ReplaySubject<User>(1);
   // posiada metodę getValue; Subject nie ma

   constructor() {
   }

  setUser(user: User) {
    this.user$.next(user);
  }

  error() {
  }
  complete() {
    this.user$.complete();

  }
}
