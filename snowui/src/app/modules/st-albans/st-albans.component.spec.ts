import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StAlbansComponent } from './st-albans.component';

describe('StAlbansComponent', () => {
  let component: StAlbansComponent;
  let fixture: ComponentFixture<StAlbansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StAlbansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StAlbansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
