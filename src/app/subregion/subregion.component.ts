import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subregion',
  templateUrl: './subregion.component.html',
  styleUrls: ['./subregion.component.css']
})
export class SubregionComponent implements OnInit {

  constructor() {
    console.log('Subregion Component Constructor has called');
   }
  ngOnInit(): void {
    console.log('Subregion Component has called');
  }
}
