import { Component } from '@angular/core';
import { MoviesSearch } from '../../services/movies-search';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  public searchString: string = ''

  constructor(
    private _movieService: MoviesSearch,
    private _router: Router
  ) {}

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

  /**
   * TODO: Describe method
   * 
   * @param event
   */
  public pressEnter(event: Event) {
    this._router.navigate(['/search'])

    this.updateSearch(event)
  }
}
