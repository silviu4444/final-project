import { Action } from '@ngrx/store';
import { Laptop, LaptopDetails } from '../models/laptop.model';
import { MobilePhone, PhoneDetails } from '../models/phone.model';

export const FETCH_HOME_DATA = '[Home] FETCH_HOME_DATA';
export const SET_HOME_DATA = '[Home] SET_HOME_DATA';
export const GET_ITEM_DETAILS = '[Home] GET_ITEM_DETAILS';
export const SET_ITEM_DETAILS = '[Home] SET_ITEM_DETAILS';
export const FETCH_FAIL = '[Home] FETCH_FAIL';
export const CLEAR_ERROR = '[Home] CLEAR_ERROR';
export const DELETE_ITEM_DETAILS = '[Home] DELETE_ITEM_DETAILS';

export class FetchHomeData implements Action {
  readonly type = FETCH_HOME_DATA;
}

export class SetHomeData implements Action {
  readonly type = SET_HOME_DATA;
  constructor(
    public payload: { mobilePhones: MobilePhone[]; laptops: Laptop[] }
  ) {}
}

export class GetItemDetails implements Action {
  readonly type = GET_ITEM_DETAILS;
  constructor(public payload: { id: string }) {}
}

export class SetItemDetails implements Action {
  readonly type = SET_ITEM_DETAILS;
  constructor(public payload: { itemDetails: LaptopDetails | PhoneDetails }) {}
}

export class DeleteItemDetails implements Action {
  readonly type = DELETE_ITEM_DETAILS;
}

export class FetchFail implements Action {
  readonly type = FETCH_FAIL;
  constructor(public payload: { errorMessage: string }) {}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export type HomeActions =
  | FetchHomeData
  | SetHomeData
  | FetchFail
  | GetItemDetails
  | SetItemDetails
  | DeleteItemDetails;
