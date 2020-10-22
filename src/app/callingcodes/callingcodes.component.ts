import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryHttpService } from '../country-http.service';

@Component({
  selector: 'app-callingcodes',
  templateUrl: './callingcodes.component.html',
  styleUrls: ['./callingcodes.component.css']
})
export class CallingcodesComponent implements OnInit {
  public CallingCodeList;
  search;
  constructor(private httpservice: CountryHttpService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    console.log('Calling Codes Component Constructor called');
  }

  ngOnInit(): void  {
    console.log('Calling Codes Component OnInit Called');

    const response = this.route.snapshot.paramMap.get('name');
    console.log(response);

    this.httpservice.getAllData(response).subscribe(
      (result) => {
        this.CallingCodeList = result;
        console.log('Get the All Calling Codes According to countries', this.CallingCodeList);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      });
  }
}
