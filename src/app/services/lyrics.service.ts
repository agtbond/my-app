import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Songs } from '../models/songs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class LyricsService {

//   constructor(private http: HttpClient) {
//   }

//   fetchLyrics(songChoosen: Songs) {
//     return this.http.get(`https://api.lyrics.ovh/v1/${songChoosen.band}/${songChoosen.song}`);
//   }
// }

export class LyricsService {

  constructor(private http: HttpClient) {
  }

  fetchLyrics(songChoosen: Songs): Observable<{lyrics: string}> {
    return this.http.get(`https://api.lyrics.ovh/v1/${songChoosen.band}/${songChoosen.song}`) as any;
  }
}


// interface FetchLyricsDto {
//   band: string;
//   song: string;
// }

