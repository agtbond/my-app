import {Component, OnInit} from '@angular/core';
import {LyricsService} from './services/lyrics.service';
import { Songs } from './models/songs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  lyrics: string[];

  constructor(private lyricsService: LyricsService) {
  }

  ngOnInit() {

  }
  onSaved(event: Songs) {
    this.lyricsService.fetchLyrics(event)
        .subscribe(res => this.lyrics = res.lyrics);
  }
}
