import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListCustomerComponent } from './movie-list-customer/movie-list-customer.component';
import { MovieListAdminComponent } from './movie-list-admin/movie-list-admin.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpHeaderInterceptorService } from './http-header-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieListCustomerComponent,
    MovieListAdminComponent,
    LoginComponent,
    FavoritesComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
