import { Component, OnInit } from '@angular/core';
import { Imovie } from '../movie';
import { MovieListService } from '../movie-list.service';

@Component({
  selector: 'app-movie-list-customer',
  templateUrl: './movie-list-customer.component.html',
  styleUrls: ['./movie-list-customer.component.css']
})
export class MovieListCustomerComponent implements OnInit {

  message: any;

  public movies: Imovie;

  constructor(private movieService: MovieListService) { }

  add(movie) {
    this.movieService.addToFavorite(movie).subscribe(
      data => {
        this.message = data;
        console.log(this.message);
      }
    )
  }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(data => {
      this.movies = data;
      console.log(data);
    });
  }
}
