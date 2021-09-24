import { AppState } from 'src/app/store/app.reducer';

export const SelectButtonShouldChange = (state: AppState) =>
  state.UIStore.addToCart.addToCartButtonShouldChange;
