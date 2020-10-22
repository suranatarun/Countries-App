import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryHttpService } from '../country-http.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  CurrenciesList;
  search;
  constructor(private httpservice: CountryHttpService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    console.log('Currencies Component Constructor called');
  }

  ngOnInit(): void  {
    console.log('Currencies Component OnInit Called');

    const response = this.route.snapshot.paramMap.get('name');
    console.log(response);

    this.httpservice.getAllData(response).subscribe(
      (result) => {
        this.CurrenciesList = result;
        console.log('Get the all countries according to currencies', this.CurrenciesList);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      });
  }
}

