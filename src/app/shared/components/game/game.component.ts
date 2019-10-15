import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pokemon } from './../../models/pokemon.model';
import { PokemonService } from './../../services/pokemon.service';

@Component({
  selector: 'app-game',
  templateUrl: 'game.component.html'
})
export class GameComponent {
  private selectedPokemon: Pokemon;
  private form = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private pokemonService: PokemonService) {
    this.selectedPokemon = pokemonService.generatePokemon();
  }

  public nextPokemon() {
    this.selectedPokemon = this.pokemonService.generatePokemon();
  }
}
