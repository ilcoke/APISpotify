import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  
  artistas: any[] = [];
  refresh: boolean;

  constructor( private spotify: SpotifyService ) { }

  buscar(termino: string){
    this.refresh = true;
    
    this.spotify.getArtistas( termino )
      .subscribe( data => {
        console.log(data);
        this.artistas = data;
        this.refresh = false;  
      } );
    
  }

}
