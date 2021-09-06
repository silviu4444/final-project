import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { HomeListComponent } from './home-list.component';

const phoneExample = {
  id: 2,
  imgURL: 'test',
  manufacturer: 'test',
  model: 'test',
  price: 649,
  reviews: 825,
  specs: {
    sim: 'Dual SIM',
    memory: ['64', '256'],
    memoryRam: ['3'],
    mobileNetwork: '4G'
  },
  stars: 4.8
};

const fakeState = {
  select: (fakeParam: string) => of({ homeProducts: { mobilePhones: [phoneExample] } })
};

describe('HomeListComponent', () => {
  let component: HomeListComponent;
  let fixture: ComponentFixture<HomeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [{ provide: Store, useValue: fakeState }],
      declarations: [HomeListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('store subscription should add items on mobilePones array', () => {
    component['store$'].select('homeStore').subscribe(() => {
      expect(component.homeList.mobilePhones.length).toBeGreaterThan(0);
    });
  })
});
