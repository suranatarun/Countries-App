import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryHttpService } from '../country-http.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {
  public FlagsList;
  search;
  constructor(private httpservice: CountryHttpService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    console.log('Flags Component Constructor called');
  }

  ngOnInit(): void  {
    console.log('Flags Component OnInit Called');

    const response = this.route.snapshot.paramMap.get('name');
    console.log(response);

    this.httpservice.getAllData(response).subscribe(
      (result) => {
        this.FlagsList = result;
        console.log('Get the All Flags', this.FlagsList);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      });
  }
}
