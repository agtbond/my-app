import {Component, OnInit} from '@angular/core';
import {LyricsService} from './services/lyrics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {
  }

  ngOnInit() {
  }
}
