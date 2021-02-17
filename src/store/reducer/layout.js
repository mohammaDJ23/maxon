import * as actionType from "../actions/actionType";
import utility from "../../share/utility";

const initialState = {
  sideNavigationStyle: false,
};

const sideNavigationStyle = (state, action) =>
  utility(state, { sideNavigationStyle: !state.sideNavigationStyle });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SIDE_NAVIGATION_STYLE:
      return sideNavigationStyle(state, action);
    default:
      return state;
  }
};

export default reducer;
