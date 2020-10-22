import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AllRegionViewComponent } from './all-region-view/all-region-view.component';
import { AllCountriesViewComponent } from './all-countries-view/all-countries-view.component';
import { SingleCountryViewComponent } from './single-country-view/single-country-view.component';
import { CountryHttpService } from './country-http.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyFilterComponent } from './currency-filter/currency-filter.component';
import { LanguageFilterComponent } from './language-filter/language-filter.component';
import { RegionComponent } from './region/region.component';
import { SubregionComponent } from './subregion/subregion.component';
import { CountriesComponent } from './countries/countries.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CallingcodesComponent } from './callingcodes/callingcodes.component';
import { FlagsComponent } from './flags/flags.component';
import { LanguagesComponent } from './languages/languages.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AllRegionViewComponent,
    AllCountriesViewComponent,
    SingleCountryViewComponent,
    CurrencyFilterComponent,
    LanguageFilterComponent,
    RegionComponent,
    SubregionComponent,
    CountriesComponent,
    CurrenciesComponent,
    CallingcodesComponent,
    FlagsComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot([
      { path: 'region', component: AllRegionViewComponent},
      { path: '', redirectTo: 'region', pathMatch: 'full' },
      { path: 'region/countries/:region', component: AllCountriesViewComponent },
      { path: 'region/countries/:region/:name', component: SingleCountryViewComponent },
      { path: 'region/countries/:region/:name/:countries[].code', component: CurrencyFilterComponent},
      { path: 'region/countries/language/:region/:name/:languages[].iso639_1', component: LanguageFilterComponent},


      { path: 'Other/Allregion' , component: RegionComponent},
      { path: 'Other/Allsubregion', component: SubregionComponent },
      { path: 'Other/Allcountries', component: CountriesComponent },
      { path: 'Other/Allcurrencies', component: CurrenciesComponent },
      { path: 'Other/Allcallingcodes', component: CallingcodesComponent },
      { path: 'Other/Allflags', component: FlagsComponent },
      { path: 'Other/AllLanguages', component: LanguagesComponent}
    ])
  ],
  providers: [CountryHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
