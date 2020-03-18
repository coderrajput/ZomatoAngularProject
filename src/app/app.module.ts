import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { SearchComponent } from './search/search.component';
import { CitySelectionComponent } from './city-selection/city-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    SearchComponent,
    CitySelectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
