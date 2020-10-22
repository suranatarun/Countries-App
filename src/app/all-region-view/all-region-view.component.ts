import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryHttpService } from '../country-http.service';

@Component({
  selector: 'app-all-region-view',
  templateUrl: './all-region-view.component.html',
  styleUrls: ['./all-region-view.component.css']
})
export class AllRegionViewComponent implements OnInit {

  AllRegion: any;
  constructor(private httpservice: CountryHttpService, private route: ActivatedRoute, private router: Router) {
    console.log('All Region View Constructor called');
   }

  ngOnInit(): void {
    console.log('All Region View ngOnInit has called');

    this.httpservice.getAllregion().subscribe(
      (result) => {
        this.AllRegion = result;
        console.log(result);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      });
  }
}
