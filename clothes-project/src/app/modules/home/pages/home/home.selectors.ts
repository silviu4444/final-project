import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

const selectedItem = (state: AppState) => state.homeStore.selectedItem;
const homeProducts = (state: AppState) => {
  return [
    ...state.homeStore.homeProducts.laptops,
    ...state.homeStore.homeProducts.mobilePhones
  ];
};

export const selectItemDetails = createSelector(
  homeProducts,
  selectedItem,
  (items, selectedItem) => {
    return !!selectedItem
      ? items
          .filter((item) => item.id === selectedItem.id)
          .map((el) => {
            return {
              ...el,
              inDepthDetails: selectedItem
            };
          })[0]
      : null;
  }
);

export const selectHomeProducts = (state: AppState) =>
  state.homeStore.homeProducts;
