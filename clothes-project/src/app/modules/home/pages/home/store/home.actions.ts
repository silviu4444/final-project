import { Action } from '@ngrx/store';
import { Laptop } from '../models/laptop.model';
import { MobilePhone } from '../models/phone.model';

export const FETCH_HOME_DATA = '[Home] FETCH_HOME_DATA';
export const SET_HOME_DATA = '[Home] SET_HOME_DATA';

export class FetchHomeData implements Action {
  readonly type = FETCH_HOME_DATA;
}

export class SetHomeData implements Action {
  readonly type = SET_HOME_DATA;
  constructor(
    public payload: { mobilePhones: MobilePhone[]; laptops: Laptop[] }
  ) {}
}

export type HomeActions = FetchHomeData | SetHomeData;
