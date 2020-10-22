import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryHttpService } from '../country-http.service';

@Component({
  selector: 'app-currency-filter',
  templateUrl: './currency-filter.component.html',
  styleUrls: ['./currency-filter.component.css']
})
export class CurrencyFilterComponent implements OnInit {

  SingleCurrency: any;
  currency;
  constructor(private httpservice: CountryHttpService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    console.log('Currency Filter Constructor has called');
   }

  ngOnInit(): void {
    console.log('Currency Filter OnInit has called');
    const response = this.route.snapshot.paramMap.get('countries[].code');
    console.log(response);

    this.httpservice.getDataByCurrency(response).subscribe(
      (result) => {
        this.SingleCurrency = result;
        console.log('Get Data by Currency Code', this.SingleCurrency);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      });
  }
}
