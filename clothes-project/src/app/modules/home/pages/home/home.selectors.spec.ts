import { AppState } from "src/app/store/app.reducer";
import { selectItemDetails } from "./home.selectors"
import { MobilePhone, PhoneDetails } from "./models/phone.model";
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
    expect(selectItemDetails(initialState)).toBe(null);
  })

  it('selectedItemDetails should return a new item', () => {
    const updatedState = {...initialState, homeStore: {
      homeProducts: {
        mobilePhones: [{id:1} as MobilePhone]
      },
      selectedItem: {id: 1} as PhoneDetails
    }}
    expect(selectItemDetails(updatedState as AppState)).toBeTruthy();
  })
})
