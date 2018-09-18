import { Component, OnInit, Input } from '@angular/core';
import { HealthService } from '../../../services/health.service';

@Component({
  selector: 'app-show-graph',
  templateUrl: './show-graph.component.html',
  styleUrls: ['./show-graph.component.css']
})
export class ShowGraphComponent implements OnInit {
  @Input() localSet;
  @Input() weight: number;
  // weight$;

  constructor(private healthService: HealthService) {
    // this.weight$ = healthService.weight$;
  }

  ngOnInit() {
    // console.log(this.weight$);


  }




}
