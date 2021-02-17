import * as actionType from "../actions/actionType";
import utility from "../../share/utility";

const initialState = {
  color: "#ff7214",
  newStyleOfNavigation: false,
};

const changeColor = (state, action) => utility(state, { color: action.color });

const changeNavigationStyle = (state, action) =>
  utility(state, { newStyleOfNavigation: true });

const defaultNavigationStyle = (state, action) =>
  utility(state, { newStyleOfNavigation: false });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_COLORS_OF_LOGO:
      return changeColor(state, action);
    case actionType.CHANGE_NAVIGATION_STYLE:
      return changeNavigationStyle(state, action);
    case actionType.DEFAULT_NAVIGATION_STYLE:
      return defaultNavigationStyle(state, action);
    default:
      return state;
  }
};

export default reducer;
