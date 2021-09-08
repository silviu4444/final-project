import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

const selectedItem = (state: AppState) => state.homeStore.selectedItem;

const homeProducts = (state: AppState) => {
  const result = [];
  Object.keys(state.homeStore.homeProducts).forEach((item) =>
    result.push(...state.homeStore.homeProducts[item])
  );
  return result;
};

export const selectItemDetails = createSelector(
  homeProducts,
  selectedItem,
  (items, selectedItem) => {
    return !!selectedItem
      ? items
          .filter((item) => item.id === selectedItem.id)
          .map((item) => ({
            ...item,
            inDepthDetails: selectedItem
          }))[0]
      : null;
  }
);

export const selectHomeProducts = (state: AppState) =>
  state.homeStore.homeProducts;
