import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListItemDetailsComponent } from './home-list-item-details.component';

describe('HomeListItemDetailsComponent', () => {
  let component: HomeListItemDetailsComponent;
  let fixture: ComponentFixture<HomeListItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeListItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
