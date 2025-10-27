import { Component, signal } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesSearch } from '../../services/movies-search';

/**
 * Now carousel works only with 3 objects in array
 *
 * TODO: Adapt component for screen sizes and for more or less objects in array
 */

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  // Private fields
  private _movies: Movie[] = [];
  private _currentIndex!: number;
  private _medianIndex!: number;
  private _carouselLength!: number;

  // Public fields
  public carouselArray: Movie[] = [];

  // Signals
  private _carouselStart = signal(false);
  private _carouselEnd = signal(false);
  public isTransitioning = signal(false);

  constructor(private _moviesService: MoviesSearch) {}

  //#region Lifecycle methods

  /**
   * Runs once after Angular has initialized all the component's inputs.
   */
  ngOnInit(): void {
    this._movies = this._moviesService.allMovies;

    this._initCarousel([2, 0, 4]);
    this._carouselLength = this.carouselArray.length;

    this._medianIndex = Math.floor(this._carouselLength / 2);
    this._currentIndex = this._medianIndex;
  }

  //#endregion

  //#region User methods
  // Private methods

  /**
   * TODO: !!! EDIT TEMPORARY SOLUTION !!!
   *
   * Init array of movie objects for carousel
   */
  private _initCarousel(idArray: number[]) {
    for (let id of idArray) {
      const movie = this._movies.find((movie) => movie.id === id);

      if (movie) {
        this.carouselArray.push(movie);
      }
    }
  }

  // Public methods

  /**
   * TODO: Update comment
   */
  public currentItem(index: number): string | null {
    if (index == this._currentIndex) return 'active';
    else return null;
  }

  /**
   * TODO: Update comment
   */
  public toItem(index: number) {
    this._currentIndex = index;
  }

  /**
   * TODO: Update comment
   */
  public slideItem(direction: number) {
    if (this.isTransitioning()) return;

    this.isTransitioning.set(true);

    this._currentIndex =
      (this._currentIndex + direction + this._carouselLength) % this._carouselLength;

    this._carouselStart.update(() => this._currentIndex == 0);
    this._carouselEnd.update(() => this._currentIndex == this._carouselLength - 1);
  }

  /**
   * TODO: Update comment
   */
  public getClassByIndex(index: number): string {
    let relativeIndex = index - this._currentIndex;
    console.log(index);

    switch (relativeIndex) {
      case -1:
        return 'prev';
      case 0:
        return 'curr';
      case 1:
        return 'next';
      default:
        if (this._carouselStart()) return 'prev';
        else if (this._carouselEnd()) return 'next';
        else return 'hidden';
    }
  }

  /**
   * TODO: Update comment
   */
  public onTransitionEnd() {
    this.isTransitioning.set(false);
  }

  //#endregion
}
