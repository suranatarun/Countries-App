import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubregionComponent } from './subregion.component';

describe('SubregionComponent', () => {
  let component: SubregionComponent;
  let fixture: ComponentFixture<SubregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
