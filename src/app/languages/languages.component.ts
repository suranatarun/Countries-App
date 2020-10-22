import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryHttpService } from '../country-http.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  public LanguagesList;
  search;
  constructor(private httpservice: CountryHttpService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    console.log('Languages Constructor called');
  }

  ngOnInit(): void  {
    console.log('Languages OnInit Called');

    const response = this.route.snapshot.paramMap.get('name');
    console.log(response);

    this.httpservice.getAllData(response).subscribe(
      (result) => {
        this.LanguagesList = result;
        console.log('Get the All Languages', this.LanguagesList);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      });
  }

}
