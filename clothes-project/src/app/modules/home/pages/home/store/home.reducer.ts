import * as HomeActions from './home.actions';

const initialState = {
  mobilePhones: []
};

export function homeReducer(
  state = initialState,
  action: HomeActions.GetHomeData
) {
  switch (action.type) {
    case HomeActions.GET_HOME_DATA:
      return {
        ...state,
        mobilePhones: [action.payload]
      };
  }
}
