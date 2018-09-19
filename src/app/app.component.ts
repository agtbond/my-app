import {Component, OnInit, Input, Inject} from '@angular/core';
import {LyricsService} from './services/lyrics.service';
import { Songs } from './models/songs';
// import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public data: any = [];
  @Input() llyrics: string[];

  constructor(private lyricsService: LyricsService) {
  }


  ngOnInit() {

  }

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    // this.storage.set(key, val);
    // this.data[key] = this.storage.get(key);
   }


   getFromLocal(key): void {
    console.log('recieved= key:' + key);
    // this.data[key] = this.storage.get(key);
    console.log(this.data);
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
