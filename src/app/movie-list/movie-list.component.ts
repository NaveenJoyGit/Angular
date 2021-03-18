import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imovie } from '../movie';
import { MovieListService } from '../movie-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public movies: Imovie[];

  constructor(private movieService: MovieListService, private router: Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
    this.router.navigateByUrl('login');
  }

}
