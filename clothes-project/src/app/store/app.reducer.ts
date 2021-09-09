import { ActionReducerMap } from '@ngrx/store';
import * as fromHome from '../modules/home/pages/home/store/home.reducer';

export interface AppState {
  homeStore: fromHome.HomeState;
}

export const appReducer: ActionReducerMap<AppState> = {
  homeStore: fromHome.homeReducer
};
