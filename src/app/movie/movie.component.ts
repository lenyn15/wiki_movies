import { Reparto } from './../core/models/reparto.model';
import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../core/models/movie.model';
import { MovieService } from '../core/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor(private movieService: MovieService, private router: Router) {}
  currentPage: number = 1;
  movies: MovieModel[] = [];

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(direction: string = '') {
    if (this.currentPage > 1 && direction === 'back') {
      this.currentPage = this.currentPage - 1;
    }
    if (this.currentPage < 500 && direction === 'forward') {
      this.currentPage = this.currentPage + 1;
    }
    this.movieService.getPopularMovies(this.currentPage.toString()).subscribe({
      next: (response) => {
        this.movies = response.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  verDetalle(idMovie: number) {
    localStorage.setItem('idmovie', JSON.stringify(idMovie));
    this.router.navigateByUrl('/detail-movie');
  }
}
