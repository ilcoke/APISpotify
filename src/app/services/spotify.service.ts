import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor( private http: HttpClient) { }
  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : "Bearer BQAyEjfXQdgVgOGeFWvIWUlfZu5zaXFZVXI04hb3zSVfITP2go1z-elyJnxpIwd-QSxLqgbZVf35UfncddY"
    });
    return this.http.get(url, {headers});
  }
  getNewRelases(){
    return this.getQuery('browse/new-releases?limit=3')
      .pipe( map( data => data['albums'].items ));
  }
  getArtistas( termino: string ){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=5`)
    .pipe( map( data => data['artists'].items));
  }
  getArtista( id: string ){
    return this.getQuery(`artists/${ id }`);
    //.pipe( map( data => data['artists'].items));
  }
}
