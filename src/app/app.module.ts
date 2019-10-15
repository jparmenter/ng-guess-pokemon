import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './shared/components/banner/banner.component';
import { GameComponent } from './shared/components/game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './shared/services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    GameComponent
  ],
  imports: [
  AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
