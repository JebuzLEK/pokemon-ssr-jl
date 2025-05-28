import { Component, effect, inject, Signal, signal, WritableSignal } from '@angular/core';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonListSkeletonComponent } from './ui/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { PokemonService } from '../../pokemons/services/pokemon/pokemon.service';
import { SimplePokemon } from '../../pokemons/interfaces';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pokemons',
  imports: [
    PokemonListComponent,
    PokemonListSkeletonComponent,
    RouterLink
  ],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css'
})
export default class PokemonsPageComponent {

  private readonly pokemonService: PokemonService = inject( PokemonService );
  private readonly route: ActivatedRoute = inject( ActivatedRoute );
  private readonly router: Router = inject( Router );
  private readonly title = inject( Title );

  public pokemons: WritableSignal<SimplePokemon[]> = signal( [] );
  public isLoading: WritableSignal<boolean> = signal( false );
  public currentPage = toSignal<number>( this.checkParams() );

  public loadOnPageChanged = effect(() => {
    this.loadPokemonList( this.currentPage()! );
  });

  public checkParams() {
    return this.route.params.pipe(
      map(( params) => params['page'] ?? '1' ),
      map( page => ( isNaN( +page ) ? 1 : +page )),
      map( page => Math.max( 1, page ))
    );
  }

  public async loadPokemonList( page = 0 ): Promise<void> {
    this.pokemonService.loadPage( page )
    .pipe(
      tap(() => this.title.setTitle( `Pokemons - Page ${ page }` ))
    )
    .subscribe( ( pokemons: SimplePokemon[] ) => {
      this.pokemons.set( pokemons );
    });
  }
}
