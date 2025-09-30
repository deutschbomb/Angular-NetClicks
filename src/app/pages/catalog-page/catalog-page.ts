import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesSearch } from '../../services/movies-search';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})
export class CatalogPage {
  constructor(
    private _moviesService: MoviesSearch
  ) { }
  
  public get movies() : Movie[] {
    return this._moviesService.filteredMovies
  }  
}
