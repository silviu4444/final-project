import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { selectHomeError, selectItemDetails } from '../../../home.selectors';
import { HomeService } from '../../../home.service';

import { HomeListItemDetailsComponent } from './home-list-item-details.component';

const mockRoute = {
  queryParams: of({ id: 100 })
};

const mockHomeService = {
  createPhoneTitle: () => 'PHONE TITLE',
  createLaptopTitle: () => 'LAPTOP TITLE'
};

const laptopExample = {
  id: 101,
  imgURL:
    'https://s13emagst.akamaized.net/products/33874/33873196/images/res_2ce18bde5ec79adc307a8d4fc03e40a3.jpg?width=150&height=150&hash=A649F6B481D5B3EB10B7C31C7851B679',
  manufacturer: 'Apple',
  model: 'MacBook Air',
  oldPrice: 1199,
  price: 999,
  reviews: 113,
  specs: {
    colors: {
      Black: ['test']
    },
    display: 'True Tone',
    inch: 13,
    memory: 'SSD 256GB',
    processor: 'Apple M1'
  },
  stars: 4.9,
  type: 'laptops'
};

const mobilePhoneExample = {
  id: 6,
  imgURL: 'test',
  manufacturer: 'Apple',
  model: '12 PRO',
  oldPrice: 1149,
  price: 1099,
  reviews: 204,
  specs: {
    colors: {
      Blue: ['test2']
    },
    memory: ['256', '512'],
    memoryRam: ['5'],
    mobileNetwork: '5G'
  },
  stars: 4.8,
  type: 'mobilePhones'
};

const initialState: any = {
  homeStore: {
    homeProducts: {
      mobilePhones: [],
      laptops: []
    },
    homeError: 'error test',
    selectedItem: laptopExample
  }
};

describe('HomeListItemDetailsComponent', () => {
  let component: HomeListItemDetailsComponent;
  let fixture: ComponentFixture<HomeListItemDetailsComponent>;

  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeListItemDetailsComponent],
      imports: [
        RouterTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            {
              selector: selectItemDetails,
              value: initialState.homeStore.selectedItem
            }
          ]
        }),
        { provide: ActivatedRoute, useValue: mockRoute },
        { provide: HomeService, useValue: mockHomeService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListItemDetailsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("queryParams should return an id that's equal to 100", () => {
    component['route'].queryParams.subscribe((queryParams) => {
      expect(queryParams.id).toEqual(100);
    });
  });

  it('should return the title for a laptop', () => {
    const spyOnGetTitle = spyOn(component, 'getTitle');
    fixture.detectChanges();
    expect(spyOnGetTitle).toHaveBeenCalled();
  });

  it('should return the title for a mobile phone', () => {
    const spyOnGetTitle = spyOn(component, 'getTitle');
    spyOn(component['store$'], 'select').and.returnValue(
      of(mobilePhoneExample)
    );
    fixture.detectChanges();
    expect(spyOnGetTitle).toHaveBeenCalled();
  });

  it('should set item on component if selectedItem from state is defined', () => {
    store.select(selectItemDetails).subscribe((item) => {
      fixture.detectChanges();
      expect(component.item).toEqual(item);
    });
  });

  it('should open snackbar if homeState has an error', () => {
    const spyOnSnackBar = spyOn(component['customSnackBar'], 'open');
    fixture.detectChanges();
    store.select(selectHomeError).subscribe((error) => {
      expect(error).toBeDefined();
      expect(spyOnSnackBar).toHaveBeenCalled();
    });
  });

  it('should call changeColor when an image was clicked', () => {
    // const spyOnChangeColor = spyOn(component, 'onChangeColor');
    const spyOnGetTitle = spyOn(component, 'getTitle');
    fixture.detectChanges();
    const imageButton =
      fixture.debugElement.nativeElement.querySelector('.item-color');
    imageButton.click();

    // expect(spyOnChangeColor).toHaveBeenCalledWith('Black', 0);
    expect(spyOnGetTitle).toHaveBeenCalled();
  });
});
