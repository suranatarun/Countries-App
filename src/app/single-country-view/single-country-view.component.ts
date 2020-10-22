import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryHttpService } from '../country-http.service';

@Component({
  selector: 'app-single-country-view',
  templateUrl: './single-country-view.component.html',
  styleUrls: ['./single-country-view.component.css']
})
export class SingleCountryViewComponent implements OnInit {
  SingleCountryData: any;

  constructor(private httpservice: CountryHttpService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    console.log('Single Country View Constructor has called');
   }

  ngOnInit(): void {
    console.log('Single Country View OnInit has called');
    const cName = this.route.snapshot.paramMap.get('name');
    console.log(cName);

    this.httpservice.getSingleCountry(cName).subscribe(
      (result) => {
            this.SingleCountryData = result;
            console.log('Get Single Country Data', this.SingleCountryData);
    },
    error => {
      console.log('some error occured');
      console.log(error.errorMessage);
    });
  }
}
