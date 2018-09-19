import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
 // @Input() weight: number;
  test = 'Wiadomo';
  weight;

  constructor() {
  }



  ngOnInit() {
   // console.log('Parent: ' + this.weight);
  }
  saved(weight) {
    this.weight = weight;
    console.log('Event ' + this.weight);
  }

}
