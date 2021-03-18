import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  createHeader() {
    let token = sessionStorage.getItem('token');
    console.log(token);
    return "Bearer " + token;
  }

  getFavoritesList(): Observable<any> {
    let authToken = this.createHeader();
    let headers = new HttpHeaders({
      Authorization: authToken
    });
    return this.http.get<any>('http://localhost:8080/favorites', { headers }
    ).pipe();
  }

  deleteFavorite(id) {
    let authToken = this.createHeader();
    let headers = new HttpHeaders({
      Authorization: authToken
    });
    const deleteUrl = 'http://localhost:8080/favorites-delete/' + id;
    return this.http.delete(deleteUrl, { headers });
  }

  constructor(private http: HttpClient) { }

}
