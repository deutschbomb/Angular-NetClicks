import { Component } from '@angular/core';
import { MoviesSearch } from '../../services/movies-search';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  public searchString: string = ''

  constructor(private _movieService: MoviesSearch) {}

  /**
   * TODO: Describe method
   * 
   * @param event 
   */
  public updateValue(event: Event) {
    const target = event.target as HTMLInputElement

    this.searchString = target.value
  }

  /**
   * TODO: Describe method
   * 
   * @param event 
   */
  public updateSearch(event: Event) {
    this._movieService.searchString = this.searchString
  }
}
