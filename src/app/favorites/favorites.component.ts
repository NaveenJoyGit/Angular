import { Component, OnInit } from '@angular/core'; 
import { Ifavorites } from '../favorites'; 
import { FavoritesService } from '../favorites.service'; 
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public favorites: Ifavorites;

  constructor(private favoritesService: FavoritesService) { }

  delete(id: number) {
    console.log(id);
    this.favoritesService.deleteFavorite(id).subscribe(
      data => {
        // this.favorites = data; 
        this.onInIt();
        console.log(data);
      }
    )
  }

  onInIt() {
    this.favoritesService.getFavoritesList().subscribe(
      data => {
        this.favorites = data;
        console.log(data);
      }
    );
  }

  ngOnInit(): void {
    this.onInIt();
  }

}
