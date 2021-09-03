import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePhoneItemComponent } from './home-phone-item.component';

describe('HomeItemComponent', () => {
  let component: HomePhoneItemComponent;
  let fixture: ComponentFixture<HomePhoneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePhoneItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePhoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
