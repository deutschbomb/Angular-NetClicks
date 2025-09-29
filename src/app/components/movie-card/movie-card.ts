import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: false,
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard {
  @Input() movie!: Movie
    
  colorRating(value: number): string {
    if (value < 5) {
      return 'rgb(255, 0, 0)'
    } else if (value < 7) {
      return 'rgb(170, 170, 170)'
    } else {
      return 'rgb(4, 163, 30)'
    }
  }
}
