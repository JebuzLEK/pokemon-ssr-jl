import { Component, input } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { SimplePokemon } from '../../interfaces';

@Component({
  selector: 'pokemon-list',
  standalone: true,
  imports: [
    PokemonCardComponent
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  public pokemonList = input.required<SimplePokemon[]>();

}
