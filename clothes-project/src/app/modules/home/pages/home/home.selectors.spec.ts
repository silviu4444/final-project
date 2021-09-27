import { AppState } from "src/app/store/app.reducer";
import { selectedItem } from "./home.selectors"
const initialState: AppState = {
  homeStore: {
    homeProducts: {
      mobilePhones: [],
      laptops: []
    },
    homeError: 'error',
    selectedItem: null
  }
};

describe('HomeSelectors', () => {
  it('selectedItemDetails should return null', () => {
    expect(selectedItem(initialState)).toBe(null);
  })

  // it('selectedItemDetails should return a new item', () => {
  //   const updatedState = {...initialState, homeStore: {
  //     homeProducts: {
  //       mobilePhones: [{id:1} as MobilePhone]
  //     },
  //     selectedItem: {id: 1} as PhoneDetails
  //   }}
  //   expect(selectedItem(updatedState)).toBeTruthy();
  // })
})
