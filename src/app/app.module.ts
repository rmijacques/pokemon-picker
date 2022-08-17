import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntialConfigComponent } from './intial-config/intial-config.component';
import { FormsModule } from '@angular/forms';
import { TeamPickerComponent } from './team-picker/team-picker.component';
import { TeamSummaryComponent } from './team-summary/team-summary.component';
import { PokemonTextBoxComponent } from './pokemon-text-box/pokemon-text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    IntialConfigComponent,
    TeamPickerComponent,
    TeamSummaryComponent,
    PokemonTextBoxComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
