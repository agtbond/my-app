import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  login$: Subject<string> = new Subject();

  setUser(login: string): void {
    this.login$.next(login);
  }

  complete() {
    this.login$.complete();
  }
}
