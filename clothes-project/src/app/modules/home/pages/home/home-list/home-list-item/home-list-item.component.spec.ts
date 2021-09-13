import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Laptop } from '../../models/laptop.model';
import { MobilePhone } from '../../models/phone.model';

import { HomeItemComponent } from './home-list-item.component';

const phoneExample: MobilePhone = {
  id: 2,
  imgURL: 'test',
  manufacturer: 'test',
  model: 'test',
  price: 649,
  oldPrice: 900,
  reviews: 825,
  specs: {
    sim: 'Dual SIM',
    memory: ['64', '256'],
    memoryRam: ['3'],
    mobileNetwork: '4G'
  },
  stars: 4.8,
  type: 'PHONE'
};

const laptopExample: Laptop = {
  id: 101,
  imgURL:
    'https://s13emagst.akamaized.net/products/33874/33873196/images/res_2ce18bde5ec79adc307a8d4fc03e40a3.jpg?width=150&height=150&hash=A649F6B481D5B3EB10B7C31C7851B679',
  manufacturer: 'Apple',
  model: 'MacBook Air',
  oldPrice: 1199,
  price: 999,
  reviews: 113,
  specs: {
    display: 'True Tone',
    inch: 13,
    memory: 'SSD 256GB',
    processor: 'Apple M1'
  },
  stars: 4.9,
  type: 'LAPTOP'
};

describe('HomeItemComponent', () => {
  let component: HomeItemComponent;
  let fixture: ComponentFixture<HomeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeItemComponent);
    component = fixture.componentInstance;
  });
  it('should create', () => {
    component.item = phoneExample;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call createPhoneTitle if isMobilePhone is true(getTitle fn)', () => {
    component.item = phoneExample;
    fixture.detectChanges();
    const spyOnCreatePhTitle = spyOn(component, 'createPhoneTitle');
    component.getTitle();
    expect(spyOnCreatePhTitle).toHaveBeenCalledWith(component.item);
  });

  it('should call createLaptopTitle if isMobilePhone(getTitle fn) is false', () => {
    component.item = laptopExample;
    fixture.detectChanges();
    const spyOnCreateLaptopTitle = spyOn(component, 'createLaptopTitle');
    component.getTitle()
    expect(spyOnCreateLaptopTitle).toHaveBeenCalledWith(component.item);
  })

  it('should have sim in item title', () => {
    component.item = phoneExample;
    component.item.specs.sim = 'Dual SIM';
    fixture.detectChanges();
    expect(component.getTitle()).toContain('Dual SIM');
  })

  it('should replace sim in title with an empty string if a sim property is undefined(getTitle fn)', () => {
    component.item = phoneExample;
    delete component.item.specs.sim;
    fixture.detectChanges();
    expect(component.getTitle()).not.toContain('Dual SIM');
  });
});
