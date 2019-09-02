import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token: any = "Bearer BQDkHRviMSC4IrOyzKYsud4_UAt_5VybVxRF1rXKWBVC2czvy4HjPuxjrN454KtdaN3DhFUnTYj8mafZiLY"
  
  constructor( private http: HttpClient) { }
  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : "Bearer BQDkHRviMSC4IrOyzKYsud4_UAt_5VybVxRF1rXKWBVC2czvy4HjPuxjrN454KtdaN3DhFUnTYj8mafZiLY"
    });
    return this.http.get(url, {headers});
  }
  getNewRelases(){
    return this.getQuery('browse/new-releases?limit=3')
      .pipe( map( data => data['albums'].items ));
  }
  getArtista( termino: string ){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=5`)
    .pipe( map( data => data['artists'].items));
  }
}
