import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imovie } from '../movie';
import { MovieListService } from '../movie-list.service';

@Component({
  selector: 'app-movie-list-admin',
  templateUrl: './movie-list-admin.component.html',
  styleUrls: ['./movie-list-admin.component.css']
})
export class MovieListAdminComponent implements OnInit {

  public movies: Imovie;

  constructor(private movieService: MovieListService, private router: Router) { }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(data => {
      this.movies = data;
      console.log(data);
    });
  }
}
