import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryHttpService } from '../country-http.service';

@Component({
  selector: 'app-language-filter',
  templateUrl: './language-filter.component.html',
  styleUrls: ['./language-filter.component.css']
})
export class LanguageFilterComponent implements OnInit {

  AllDataByLanguage: any;

  constructor(private httpservice: CountryHttpService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    console.log('Language Filter Constructor has called');
   }

  ngOnInit(): void {
    console.log('Language Filter OnInit has called');
    const cName = this.route.snapshot.paramMap.get('languages[].iso639_1');
    console.log(cName);

    this.httpservice.getLanguageData(cName).subscribe(
      (result) => {
            this.AllDataByLanguage = result;
            console.log('Get Countries Data by Language', this.AllDataByLanguage);
    },
    error => {
      console.log('some error occured');
      console.log(error.errorMessage);
    });
  }
}