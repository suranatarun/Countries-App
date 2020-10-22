import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Countries-App';
  constructor() {
    console.log('App Component Constructor called');
  }
  ngOnInit(): void {
    console.log('App Component ngOnInit called');
  }
  ngOnDestroy(): void {
    console.log('App Component has destroyed');
  }
}
