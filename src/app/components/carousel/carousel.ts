import { Component } from '@angular/core';
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

  constructor(private _moviesService: MoviesSearch) {}

  ngOnInit(): void {
    this._movies = this._moviesService.allMovies;

    this._initCarousel([2, 0, 4]);

    this._medianIndex = Math.floor(this.carouselArray.length / 2);
    this._currentIndex = this._medianIndex;
  }

  /**
   * TODO: Update comment
   */
  public getClonedItem(index: number): Movie | undefined {
    switch (index) {
      case 0:
        return this.carouselArray[this.carouselArray.length - 1];
      case this.carouselArray.length - 1:
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
  public prevItem() {
    this._currentIndex = this._getCarouselItem(-1);
    // console.log(this._currentIndex);
  }

  /**
   * TODO: Update comment
   */
  public nextItem() {
    this._currentIndex = this._getCarouselItem(1);
    // console.log(this._currentIndex);
  }

  /**
   * TODO: Update comment
   */
  public currentItem(index: number): string {
    if (index == this._currentIndex) return 'active';
    else return '';
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
  private _initCarousel(idsArray: number[]) {
    for (let id of idsArray) {
      const movie = this._movies.find((movie) => movie.id === id);

      if (movie) {
        this.carouselArray.push(movie);
      }
    }
  }

  /**
   * TODO: Update comment
   */
  private _getCarouselItem(direction: number): number {
    return (this._currentIndex + direction + this.carouselArray.length) % this.carouselArray.length;
  }
}
