import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryHttpService } from '../country-http.service';

@Component({
  selector: 'app-all-countries-view',
  templateUrl: './all-countries-view.component.html',
  styleUrls: ['./all-countries-view.component.css']
})
export class AllCountriesViewComponent implements OnInit {

  public CountriesList;
  constructor(private router: Router, private httpservice: CountryHttpService, private route: ActivatedRoute) {
    console.log('All Countries View Constructor called');
  }

  ngOnInit(): void {
    console.log('All Countries View OnInit Called');

    // Here Get Data according to regions so we do pass region parameter
    const response = this.route.snapshot.paramMap.get('region');
    console.log(response);

    // This Code go http service ts file and find getAllCountries and hit a http api request on
    // serve and fetch all the data in result variable and result shift a data in CountriesList
    this.httpservice.getAllCountries(response).subscribe(
      (result) => {
        this.CountriesList = result;
        console.log('Get the All Countries according to regions', this.CountriesList);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      });
  }
  goback = function() {
    this.router.navigateByUrl(['/region']);
  };
}
