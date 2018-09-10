import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Songs } from '../models/songs';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  constructor(private http: HttpClient) {
  }

  fetchLyrics(songChoosen: Songs) {
    return this.http.get(`https://api.lyrics.ovh/v1/${songChoosen.band}/${songChoosen.song}`);
  }
}
