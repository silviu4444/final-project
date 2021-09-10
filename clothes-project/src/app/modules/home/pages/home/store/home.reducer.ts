import { MobilePhone } from '../models/phone.model';
import * as HomeActions from './home.actions';

export interface HomeState {
  homeProducts: HomeProducts;
}

export interface HomeProducts {
  mobilePhones: MobilePhone[];
}

const initialState: HomeState = {
  homeProducts: {
    mobilePhones: []
  }
};

export function homeReducer(
  state: HomeState = initialState,
  action: HomeActions.HomeActions
) {
  switch (action.type) {
    case HomeActions.SET_HOME_DATA:
      return {
        ...state,
        homeProducts: {
          mobilePhones: action.payload
        }
      };
    default:
      return state;
  }
}
