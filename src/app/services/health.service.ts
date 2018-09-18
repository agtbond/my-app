import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  weight$ = new ReplaySubject<number>(1);

  setWeigth(weight) {
    this.weight$.next(weight);
  }
  complete() {
    this.weight$.complete();
  }
}
