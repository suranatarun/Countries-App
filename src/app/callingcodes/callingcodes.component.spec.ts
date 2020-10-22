import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingcodesComponent } from './callingcodes.component';

describe('CallingcodesComponent', () => {
  let component: CallingcodesComponent;
  let fixture: ComponentFixture<CallingcodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallingcodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
