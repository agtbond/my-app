import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  lyrics: string[];
  constructor() { }

  ngOnInit() {
  }
  // https://angular.io/guide/http

}
