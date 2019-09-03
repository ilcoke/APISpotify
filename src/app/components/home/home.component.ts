import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  
  nuevasCanciones: any[] = [];
  refresh: boolean = true;

  constructor(private spotify: SpotifyService){ 
    this.spotify.getNewRelases()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.refresh = false;
    });
  }

  ngOnInit() {
  }

}
