import { Component, Input } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-movie-card',
  standalone: false,
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard {
  @Input() title: string = ''
}
