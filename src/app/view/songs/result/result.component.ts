import { Component, OnInit } from '@angular/core';
import { LyricsService } from '../../../services/lyrics.service';
import { Songs } from '../../../models/songs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  lyrics: string[];
  constructor(private lyricsService: LyricsService) { }

  ngOnInit() {
    this.lyricsService.fetchLyrics({
      song: 'Bohemian rhapsody',
      band: 'Queen'
    }).subscribe((res: any) => {
      const lyricsString: string = res.lyrics;
      this.lyrics = lyricsString.split('\n');
    });
  }

  // showSong() {
  //   this.lyricsService.fetchLyrics()
  //   .subscribe((res: Songs) => {
  //       const lyricsString: string = res.lyrics;
  //       this.lyrics = lyricsString.split('\n');
  //     });
  // }



}
