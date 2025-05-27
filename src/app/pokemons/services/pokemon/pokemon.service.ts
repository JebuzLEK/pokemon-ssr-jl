import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon, PokemonResponse, SimplePokemon } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly url: string = 'https://pokeapi.co/api/v2/pokemon';
  private http: HttpClient = inject( HttpClient );

  public loadPage( page: number ): Observable<SimplePokemon[]> {
    if ( page !== 0 ) --page;
    page = Math.max( 0, page );
    const params = new HttpParams().set('offset', page * 20 ).set('limit', 20 );
    return this.http.get<PokemonResponse>( this.url, { params }).pipe( map( resp => {
      const simplePokemons: SimplePokemon[] = resp.results.map( ({ url, name }) =>  ({
        id: url.split('/').at( -2 ) ?? '',
        name
      }));
      return simplePokemons;
    }));
  }

  public loadPokemon( id: string ): Observable<Pokemon> {
    return this.http.get<Pokemon>( `${ this.url }/${ id }` );
  }

}
