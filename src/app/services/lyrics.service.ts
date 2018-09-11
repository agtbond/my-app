import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Songs } from '../models/songs';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  constructor(private http: HttpClient) {
  }

  fetchLyrics(songChoosen: Songs): Observable<Songs> {
    return this.http.get<Songs>(`https://api.lyrics.ovh/v1/${songChoosen.band}/${songChoosen.song}`);
  }
}
