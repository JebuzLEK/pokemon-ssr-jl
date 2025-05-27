import { Component, computed, effect, input, signal } from '@angular/core';
import { SimplePokemon } from '../../interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pokemon-card',
  imports: [
    RouterLink
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {

  private readonly pokemonApiUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'
  public pokemon = input.required<SimplePokemon>();
  public pokemonImage = computed(() => `${ this.pokemonApiUrl }${ this.pokemon().id }.png`);

  // logEffect = effect(() => console.log( this.pokemon() ));
}
