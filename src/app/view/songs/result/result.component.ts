import { Component, OnInit, Input } from '@angular/core';
import { LyricsService } from '../../../services/lyrics.service';
import { Songs } from '../../../models/songs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() lyricss: string[];
  constructor(private lyricsService: LyricsService) { }

  ngOnInit() {
  }
}
