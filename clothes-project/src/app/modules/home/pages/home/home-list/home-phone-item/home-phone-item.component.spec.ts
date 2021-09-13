import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePhoneItemComponent } from './home-phone-item.component';

const phoneExample = {
  "id": 2,
  "imgURL": "test",
  "manufacturer": "test",
  "model": "test",
  "price": 649,
  "reviews": 825,
  "specs": {
    "sim": "Dual SIM",
      "memory": [
          "64",
          "256"
      ],
      "memoryRam": [
          "3"
      ],
      "mobileNetwork": "4G"
  },
  "stars": 4.8
}

describe('HomePhoneItemComponent', () => {
  let component: HomePhoneItemComponent;
  let fixture: ComponentFixture<HomePhoneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePhoneItemComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePhoneItemComponent);
    component = fixture.componentInstance;
    component.phone = phoneExample;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should replace sim in title with an empty string if a sim property is undefined(getPhoneTitle fn)', () => {
    delete component.phone.specs.sim;
    expect(component.getPhoneTitle()).not.toContain('Dual SIM');
  })
});
