import {Component, OnInit, Input} from '@angular/core';
import {LyricsService} from './services/lyrics.service';
import { Songs } from './models/songs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @Input() llyrics: string[];

  constructor(private lyricsService: LyricsService) {
  }

  ngOnInit() {

  }
  onSaved(event: Songs) {
    this.lyricsService.fetchLyrics(event)
        // .subscribe(res => this.lyrics = res.lyrics);
        // powyższa linijka wyrzucała błąd,
        // dlatego, że próbuje przypisac do siebie dwa różne typy danych?

        .subscribe((res: any) => {
            const lyricsString: string = res.lyrics;
            this.llyrics = lyricsString.split('\n');
           // console.log(this.lyrics);
        });
  }
}
