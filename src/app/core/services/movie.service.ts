import { MovieModel } from './../models/movie.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reparto } from '../models/reparto.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}
  getPopularMovies(page: string = '1'): Observable<any> {
    const params = new HttpParams()
      .set('api_key', environment.theMovieApi.apiKey)
      .set('page', page)
      .set('language', 'es-ES');
    return this.httpClient.get(
      `${environment.theMovieApi.baseUrl}${environment.theMovieApi.popularMovies}`,
      { params: params }
    );
  }

  detalle(idMovie: string): Observable<MovieModel> {
    const params = new HttpParams()
      .set('api_key', environment.theMovieApi.apiKey)
      .set('language', 'es-ES');
    return this.httpClient.get<MovieModel>(
      `${environment.theMovieApi.baseUrl}${environment.theMovieApi.getMovie}${idMovie}`,
      { params: params }
    );
  }

  obtenerReparto(idMovie: string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', environment.theMovieApi.apiKey)
      .set('language', 'es-ES');
    return this.httpClient.get(
      `${environment.theMovieApi.baseUrl}${environment.theMovieApi.getMovie}${idMovie}/credits`,
      { params: params }
    );
  }
}
