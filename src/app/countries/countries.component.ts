import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryHttpService } from '../country-http.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public CountriesList;
  search;
  constructor(private httpservice: CountryHttpService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    console.log('Countries Component Constructor called');
  }

  ngOnInit(): void  {
    console.log('Countries Component OnInit Called');

    const response = this.route.snapshot.paramMap.get('name');
    console.log(response);

    this.httpservice.getAllData(response).subscribe(
      (result) => {
        this.CountriesList = result;
        console.log('Get the All Countries According to Region', this.CountriesList);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      });
  }
}
