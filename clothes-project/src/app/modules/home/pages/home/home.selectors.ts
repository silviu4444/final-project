import { AppState } from 'src/app/store/app.reducer';

export const homeProducts = (state: AppState) => {
  const result = [];
  Object.keys(state.homeStore.homeProducts).forEach((key) =>
    result.push(...state.homeStore.homeProducts[key])
  );
  return result;
};

export const selectedItem = (state: AppState) => state.homeStore.selectedItem;

export const selectHomeError = (state: AppState) => state.homeStore.homeError;

export const selectHomeProducts = (state: AppState) =>
  state.homeStore.homeProducts;
