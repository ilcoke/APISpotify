import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {
  artista: any = {};
  cargando: boolean = true;
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) {

    this.router.params.subscribe( items => {
      this.getArtista( items['id' ]);
      this.geTopTracks( items['id' ]);
    });
  }

  getArtista( id: string ) {
    this.spotify.getArtista( id )
      .subscribe( artista => {
        this.artista = artista;
        this.cargando = false;
    });
  }
  geTopTracks ( id: string) {
    this.spotify.geTopTracks( id )
      .subscribe( topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      } );
  }
  
  



  

  

}
