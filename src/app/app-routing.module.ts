import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { MovieListAdminComponent } from './movie-list-admin/movie-list-admin.component';
import { MovieListCustomerComponent } from './movie-list-customer/movie-list-customer.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movie-list-customer', component: MovieListCustomerComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'movie-list-admin', component: MovieListAdminComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
