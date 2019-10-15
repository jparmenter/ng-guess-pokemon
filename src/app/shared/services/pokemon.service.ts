import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService {
  private pokemon: Pokemon[];

  constructor(private http: HttpClient) {
    this.getPokemon().subscribe(data => { this.pokemon = data; });
  }

  public generatePokemon() {
    return this.pokemon[0];
  }

  private getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('../data/pokemon.json');
  }
}
