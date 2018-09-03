import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$: Subject<void> = new Subject<void>;

  setUser(user: string): void {
    this.user$.next(user);
  }

  complete() {
    this.user$.complete();
  }
}
