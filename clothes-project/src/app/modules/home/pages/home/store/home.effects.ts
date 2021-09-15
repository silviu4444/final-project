import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as HomeActions from './home.actions';
import { HomeProducts } from './home.reducer';

import { environment } from 'src/environments/environment';
import { LaptopDetails } from '../models/laptop.model';
import { PhoneDetails } from '../models/phone.model';
import { of } from 'rxjs';

const handleErrors = (errorRes: HttpErrorResponse) => {
  let errorMessage = 'Something went wrong with the server';
  return of(new HomeActions.FetchFail({ errorMessage }));
};

@Injectable()
export class HomeEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  fetchHomeData$ = this.actions$.pipe(
    ofType(HomeActions.FETCH_HOME_DATA_START),
    switchMap(() => {
      return this.http.get<HomeProducts>(environment.fetchHomeData);
    }),
    map((homeData) => {
      return new HomeActions.SetHomeDataSuccess(homeData);
    }),
    catchError((errorResponse) => {
      return handleErrors(errorResponse);
    })
  );

  @Effect({ dispatch: true })
  getItemDetails$ = this.actions$.pipe(
    ofType(HomeActions.FETCH_ITEM_DETAILS_START),
    switchMap((fetchItemAction: HomeActions.FetchItemDetailsStart) => {
      const itemID = fetchItemAction.payload.id;
      return this.http.get(`${environment.fetchByID}/${itemID}.json`).pipe(
        map((itemDetails: LaptopDetails | PhoneDetails) => {
          return new HomeActions.SetItemDetailsSuccess({ itemDetails });
        }),
        catchError((errorResponse) => {
          return handleErrors(errorResponse);
        })
      );
    })
  );
}
