import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as HomeActions from './home.actions';
import { HomeProducts } from './home.reducer';

@Injectable()
export class HomeEffects {
  constructor(private actions: Actions, private http: HttpClient) {}

  @Effect()
  fetchHomeData$ = this.actions.pipe(
    ofType(HomeActions.FETCH_HOME_DATA),
    switchMap(() => {
      return this.http.get<HomeProducts>(
        'https://shop-app-9c75f-default-rtdb.europe-west1.firebasedatabase.app/homeProducts.json'
      );
    }),
    map((homeState) => {
      return new HomeActions.SetHomeData(homeState);
    })
  );
}
