import { Action } from '@ngrx/store';

export const ADD_TO_CART_BUTTON_SHOULD_CHANGE = '[SHARED] ADD_TO_CART_BUTTON_SHOULD_CHANGE';

export class AddToCartButtonShouldChange implements Action {
  readonly type = ADD_TO_CART_BUTTON_SHOULD_CHANGE;
  constructor(public payload: { shouldChange: boolean }) {}
}

export type UIActions = AddToCartButtonShouldChange;
