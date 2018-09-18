import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() saved = new EventEmitter<Songs>();

  constructor(private lyricsService: LyricsService) {
  }

  ngOnInit() {
    this.formSong = new FormGroup({
      band: new FormControl(null, Validators.required),
      song: new FormControl(null, Validators.required)
    });
  }

  save() {
    const {band, song} = this.formSong.value;
    const songChoosen: Songs = { band, song };
    this.saved.emit(songChoosen);
    console.log('Song saved' + this.saved);
  }

}
