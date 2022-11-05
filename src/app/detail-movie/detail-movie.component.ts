import { Reparto } from './../core/models/reparto.model';
import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../core/models/movie.model';
import { MovieService } from '../core/services/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {
  movie?: MovieModel;
  reparto?: Reparto[];

  constructor(
    private movieService: MovieService,
  ) {}

  ngOnInit(): void {
    let idMovie = localStorage.getItem('idmovie');
    if (idMovie) {
      this.obtenerInformacion(idMovie);
    }
  }

  obtenerInformacion(idMovie: string) {
    this.movieService.detalle(idMovie.toString()).subscribe({
      next: (response: MovieModel) => {
        this.movie = response;
        console.log(this.movie);

      },
    });

    this.movieService.obtenerReparto(idMovie).subscribe({
      next: (response) => {
        this.reparto = response.cast.filter((actor: any) => actor.profile_path);
        this.reparto = this.reparto?.filter((_v:any,indice:number) => indice<5);
      },
    })
  }
}
