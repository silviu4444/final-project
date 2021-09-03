import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLaptopItemComponent } from './home-laptop-item.component';

describe('HomeLaptopItemComponent', () => {
  let component: HomeLaptopItemComponent;
  let fixture: ComponentFixture<HomeLaptopItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLaptopItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLaptopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
