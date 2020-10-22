import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError, concat, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryHttpService {

  public API = 'https://restcountries.eu/rest/v2';

  region: any;
  AllCountries: any;
  constructor(private http: HttpClient) {
    console.log('Country Http Service Constructor called');
  }

  getAllregion() {
    return this.http.get(this.API + '/all' + '?fields=' + 'region');
  }

  getAllCountries(region: string) {
    return this.http.get(this.API + '/region' + '/' + region);
  }

  getSingleCountry(name: string) {
    return this.http.get(this.API + '/name' + '/' + name + '?fullText=true');
  }

  getDataByCurrency(currency) {
    return this.http.get(this.API + '/currency' + '/' + currency);
  }

  getLanguageData(et: string) {
    return this.http.get(this.API + '/lang' + '/' + et);
  }

  getAllData(name) {
    return this.http.get(this.API + '/all');
  }
}
