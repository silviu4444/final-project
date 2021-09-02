import { Action } from "@ngrx/store";
import { HomeStore } from "../../models/home-store.model";

export const GET_HOME_DATA = 'GET_HOME_DATA';

export class GetHomeData implements Action {
  readonly type = GET_HOME_DATA;
  payload: HomeStore;
}
