import { ActionReducerMap } from '@ngrx/store';
import * as fromHome from '../modules/home/pages/home/store/home.reducer';
import * as fromCart from '../shared/store/cart.reducer';

export interface AppState {
  homeStore: fromHome.HomeState;
  cartStore: fromCart.CartState;
}

export const appReducer: ActionReducerMap<AppState> = {
  homeStore: fromHome.homeReducer,
  cartStore: fromCart.cartReducer
};
