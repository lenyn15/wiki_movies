import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickmortyService {

  constructor(private httpClient: HttpClient) { }

  getCharacters(): Observable<any> {
    const params = new HttpParams().set('language', 'es-ES');
    return this.httpClient.get(`${environment.theRickMortyApi.baseUrl}${environment.theRickMortyApi.characters}`,
      { params: params });
  }

  getCharacterPage(uri: string): Observable<any> {
    const params = new HttpParams().set('language', 'es-ES');
    return this.httpClient.get(uri, { params: params });
  }
}
