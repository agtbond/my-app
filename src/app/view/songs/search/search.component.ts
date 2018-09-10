import { Component, OnInit } from '@angular/core';
import { LyricsService } from '../../../services/lyrics.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Songs } from '../../../models/songs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formSong: FormGroup;

  // lyrics: string[];

  constructor(private lyricsService: LyricsService) {
  }

  ngOnInit() {
    this.formSong = new FormGroup({
      band: new FormControl(null, Validators.required),
      song: new FormControl(null, Validators.required)
    });



    // this.lyricsService.fetchLyrics({
    //   song: 'Bohemian rhapsody',
    //   band: 'Queen'
    // }).subscribe((res: any) => {
    //   const lyricsString: string = res.lyrics;
    //   this.lyrics = lyricsString.split('\n');
    // });
  }

  save() {
    const {band, song} = this.formSong.value;
    const songChoosen: Songs = { band, song };
    this.lyricsService.fetchLyrics(songChoosen);
  }

}
