import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSiteComponent } from './custom-site.component';

describe('CustomSiteComponent', () => {
  let component: CustomSiteComponent;
  let fixture: ComponentFixture<CustomSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
