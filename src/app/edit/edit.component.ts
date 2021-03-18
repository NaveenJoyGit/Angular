import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router'; 
import { Imovie } from '../movie'; 
import { MovieListService } from '../movie-list.service'; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieListService) { }

  edit(movie) {
    this.movieService.editMovie(movie).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(parseInt(id)).subscribe(
      data => {
        this.movie = data;
        console.log(this.movie);
      }
    )
  }

}
