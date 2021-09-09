import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { selectHomeError, selectItemDetails } from '../../../home.selectors';

import { HomeListItemDetailsComponent } from './home-list-item-details.component';

const mockRoute = {
  queryParams: of({ id: 100 })
};

let initialState = {
  homeStore: {
    homeProducts: {
      mobilePhones: [],
      laptops: []
    },
    homeError: 'error',
    selectedItem: { id: 1 }
  }
};


describe('HomeListItemDetailsComponent', () => {
  let component: HomeListItemDetailsComponent;
  let fixture: ComponentFixture<HomeListItemDetailsComponent>;

  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeListItemDetailsComponent],
      imports: [RouterTestingModule, MatSnackBarModule],
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            {
              selector: selectItemDetails,
              value: [initialState.homeStore.selectedItem]
            }
          ]
        }),
        { provide: ActivatedRoute, useValue: mockRoute }
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

  it('should set item on component if selectedItem from state is defined', () => {
    fixture.detectChanges()
    store.select(selectItemDetails).subscribe((item) => {
      expect(component.item).toEqual(item);
    });
  });

  it('should open snackbar if homeState han an error', () => {
    const spyOnSnackBar = spyOn(component['customSnackBar'], 'open');
    fixture.detectChanges()
    store.select(selectHomeError).subscribe((error) => {
      expect(error).toBeDefined();
      expect(spyOnSnackBar).toHaveBeenCalled();
    });
  });
});
