import { ActionReducerMap } from '@ngrx/store';
import * as fromHome from '../modules/home/pages/home/store/home.reducer';
import * as fromCart from '../shared/store/cart/cart.reducer';
import * as fromUI from '../shared/store/UI/ui.reducer';

export interface AppState {
  homeStore: fromHome.HomeState;
  cartStore: fromCart.CartState;
  UIStore: fromUI.UIState;
}

export const appReducer: ActionReducerMap<AppState> = {
  homeStore: fromHome.homeReducer,
  cartStore: fromCart.cartReducer,
  UIStore: fromUI.UIReducer
};
