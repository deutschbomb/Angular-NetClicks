import { Component, signal } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesSearch } from '../../services/movies-search';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  private _movies: Movie[] = [];
  private _currentIndex!: number;
  private _medianIndex!: number;

  public carouselArray: Movie[] = [];
  private _carouselLength!: number;
  public clonnedFirstItem!: Movie;
  public clonnedLastItem!: Movie;

  public isTransitioning = signal(false);
  public carouselStart = signal(false);
  public carouselEnd = signal(false);

  constructor(private _moviesService: MoviesSearch) {}

  ngOnInit(): void {
    this._movies = this._moviesService.allMovies;

    this._initCarousel([2, 0, 4]);
    this._carouselLength = this.carouselArray.length;
    this.clonnedFirstItem = this.carouselArray[0];
    this.clonnedLastItem = this.carouselArray[this._carouselLength - 1];

    this._medianIndex = Math.floor(this._carouselLength / 2);
    this._currentIndex = this._medianIndex;
  }

  /**
   * TODO: Update comment
   */
  public getClonedItem(index: number): Movie | undefined {
    switch (index) {
      case 0:
        return this.carouselArray[this._carouselLength - 1];
      case this._carouselLength - 1:
        return this.carouselArray[0];
      default:
        return undefined;
    }
  }

  /**
   * TODO: Update comment
   */
  public getClassByIndex(index: number): string {
    let relativeIndex = index - this._currentIndex;

    switch (relativeIndex) {
      case -1:
        return 'prev';
      case 0:
        return 'curr';
      case 1:
        return 'next';
      default:
        return 'hidden';
    }
  }

  /**
   * TODO: Update comment
   */
  // public styleTransformDirection(): string | null {}

  /**
   * TODO: Update comment
   */
  public slideItem(direction: number) {
    if (this.isTransitioning()) return;

    this.isTransitioning.set(true);

    this._currentIndex =
      (this._currentIndex + direction + this._carouselLength) % this._carouselLength;

    this.carouselStart.update(() => this._currentIndex == 0);
    this.carouselEnd.update(() => this._currentIndex == this._carouselLength - 1);
  }

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
  public onTransitionEnd() {
    this.isTransitioning.set(false);
  }

  /**
   * TODO: Update comment
   */
  private _initCarousel(idArray: number[]) {
    for (let id of idArray) {
      const movie = this._movies.find((movie) => movie.id === id);

      if (movie) {
        this.carouselArray.push(movie);
      }
    }
  }
}
