import { AppState } from 'src/app/store/app.reducer';

export const SelectUIButtonShouldChange = (state: AppState) =>
  state.UIStore.addToCart.addToCartButtonShouldChange;

export const SelectUIImageSlider = (state: AppState) =>
  state.UIStore.itemImageSlider;
