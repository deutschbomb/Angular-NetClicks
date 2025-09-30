import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesSearch } from '../../services/movies-search';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {
  private _movies: Movie[] = []
  public carouselArray: Movie[] = []

  constructor (
    private _moviesService: MoviesSearch,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._movies = this._moviesService.allMovies
    this._initCarousel([2, 0, 4])
  }

  private _initCarousel(idsArray: number[]) {
    for (let id of idsArray) {
      const movie = this._movies.find(movie => movie.id === id)

      if (movie) {
        this.carouselArray.push(movie)
      }
    }
  }
  
  /**
   * TODO: Update comment
   * 
   * @param event 
   */
  public changeCard(event: Event, index: number) {
    if (index !== 1) {
      if (index > 1) {
        this.carouselArray.push(this.carouselArray[0])
        this.carouselArray.reverse().pop()
        this.carouselArray.reverse()
      } else {
        this.carouselArray.reverse().push(this.carouselArray[0])
        this.carouselArray.reverse().pop()
      }
    } else {
      this._router.navigate([this.carouselArray[index].link, this.carouselArray[index].id])
    }
  }
}
