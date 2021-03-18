import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovie } from './movie';

@Injectable({
    providedIn: 'root'
})

export class MovieListService {
    createHeader() {
        let token = sessionStorage.getItem('token');
        console.log(token);
        return "Bearer " + token;
    }


    getMovieList(): Observable<any> {
        let authToken = this.createHeader();
        let headers = new HttpHeaders({
            Authorization: authToken
        });
        return this.http.get<any>('http://localhost:8080/movie-list', {headers}).pipe();
    }

    addToFavorite(movie) {
        const addUrl = 'http://localhost:8080/add-favorite';
        let authToken = this.createHeader();
        let headers = new HttpHeaders({
            Authorization: authToken
        });
        return this.http.post(addUrl, movie, {headers});
    }

    getMovieById(id) {
        const url = 'http://localhost:8080/edit/' + id
        return this.http.get(url);
    }

    editMovie(movie) {
        const url = 'http://localhost:8080/edit-success';
        return this.http.put(url, movie, { responseType: 'text' as 'json' })
    }

    constructor(private http: HttpClient) { }

}
