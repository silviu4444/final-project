import { Laptop } from '../models/laptop.model';
import { MobilePhone } from '../models/phone.model';
import * as HomeActions from './home.actions';

export interface HomeState {
  homeProducts: HomeProducts;
}

export interface HomeProducts {
  mobilePhones: MobilePhone[];
  laptops: Laptop[];
}

const initialState: HomeState = {
  homeProducts: {
    mobilePhones: [],
    laptops: []
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
          mobilePhones: action.payload.mobilePhones,
          laptops: action.payload.laptops
        }
      };
    default:
      return state;
  }
}
