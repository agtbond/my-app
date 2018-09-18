import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  @Input() weight: number;


  constructor() {
  }



  ngOnInit() {
    console.log('Parent: ' + this.weight);
  }
  onSaved(weight) {
    console.log('Event' + event);
  }

}
