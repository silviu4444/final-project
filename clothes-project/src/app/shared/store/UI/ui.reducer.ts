import * as UIActions from './ui.actions';

interface AddToCartState {
  addToCartButtonShouldChange: boolean;
}

export interface UIState {
  addToCart: AddToCartState;
}

const initialState: UIState = {
  addToCart: {
    addToCartButtonShouldChange: null
  }
};

export function UIReducer(
  state: UIState = initialState,
  action: UIActions.UIActions
) {
  switch (action.type) {
    case UIActions.ADD_TO_CART_BUTTON_SHOULD_CHANGE:
      const buttonShouldChange = action.payload.shouldChange;
      return {
        ...state,
        addToCart: { addToCartButtonShouldChange: buttonShouldChange }
      };
    default:
      return state;
  }
}
