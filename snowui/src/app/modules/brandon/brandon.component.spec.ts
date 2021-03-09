import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandonComponent } from './brandon.component';

describe('BrandonComponent', () => {
  let component: BrandonComponent;
  let fixture: ComponentFixture<BrandonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
