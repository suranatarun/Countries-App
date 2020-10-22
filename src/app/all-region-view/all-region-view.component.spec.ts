import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRegionViewComponent } from './all-region-view.component';

describe('AllRegionViewComponent', () => {
  let component: AllRegionViewComponent;
  let fixture: ComponentFixture<AllRegionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRegionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRegionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
