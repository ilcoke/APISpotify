import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  
  nuevasCanciones: any[] = [];
  refresh: boolean;
  errorMensaje: boolean;

  constructor(private spotify: SpotifyService){
    this.refresh = true;
    this.errorMensaje = false;

    this.spotify.getNewRelases()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.refresh = false;
    }, ( error ) => {
      console.log( error );
      this.errorMensaje = error.error.error.message;
      console.log(this.errorMensaje);
      this.refresh = false;
    } );
  }

  ngOnInit() {
  }

}
