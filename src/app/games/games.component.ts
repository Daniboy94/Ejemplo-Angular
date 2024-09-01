import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username: string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    // se usa el "this" porque vamos a usar una instancia de la clase
    //emitimos el evento que estamos creando
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    { id: 1, name: 'Dota 2' },
    { id: 2, name: 'Half-life' },
    { id: 3, name: 'Resident Evil 4' },
  ];
}
