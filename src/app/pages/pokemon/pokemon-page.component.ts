import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Pokemon } from '../../pokemons/interfaces';
import { PokemonService } from '../../pokemons/services/pokemon/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pokemon-page',
  imports: [],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PokemonPageComponent implements OnInit {

  private readonly pokemonService: PokemonService = inject( PokemonService );
  private route: ActivatedRoute = inject( ActivatedRoute );
  private title = inject( Title );
  private meta = inject( Meta );

  public pokemon: WritableSignal<Pokemon | null> = signal<Pokemon | null>( null );

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get( 'id' );
    if ( !id ) return;
    this.pokemonService.loadPokemon( id )
    .pipe(
      tap( ({ name, id }) => {
        const pageTitle = `#${ id } - ${ name }`;
        this.title.setTitle( pageTitle );
        this.meta.updateTag({ name: 'description', content: `Pokemon ${ pageTitle }` });
        this.meta.updateTag({ name: 'og:title', content: pageTitle });
        this.meta.updateTag({ name: 'og:description', content: `Pokemon ${ pageTitle }` });
        this.meta.updateTag({
          name: 'og:image',
          content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`
        });
        this.meta.updateTag({ name: 'keywords', content: `Pokemon ${ pageTitle }` });
      })
    ).subscribe( this.pokemon.set );
  }



}
