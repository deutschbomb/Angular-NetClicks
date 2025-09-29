import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIES } from '../constants/movies.constants';

@Injectable({
  providedIn: 'root'
})
export class MoviesSearch {
  private _movies: Movie[] = MOVIES;
  private _searchString: string = '';

  constructor() { }

  public get allMovies() : Movie[] {
    return this._movies
  }
  public get filteredMovies() : Movie[] {
    return this._movies.filter((item) => item.title.toLowerCase().startsWith(this._searchString.toLowerCase()))
  }

  public get searchString(): string {
    return this._searchString;
  }
  public set searchString(value: string) {
    this._searchString = value;
  }
}
