import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor() {
    console.log('Region Component Constructor has called');
   }

  ngOnInit(): void {
    console.log('Region Component ngOnInit has Called');
  }
}
