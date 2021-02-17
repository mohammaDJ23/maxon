import * as actionType from "../actions/actionType";
import utility from "../../share/utility";

const initialState = {
  profileTranslateX: 0,
  profileLength: null,
  textTranslateX: 0,
};

const setProfileLengthAndTranslate = (state, action) => {
  return utility(state, {
    profileTranslateX: action.profileTranslateX,
    textTranslateX: action.textTranslateX,
    profileLength: action.profileLength,
  });
};

const leftArrowControl = (state, action) => {
  return utility(state, {
    profileTranslateX: (state.profileTranslateX += action.moveLeft),
    textTranslateX: (state.textTranslateX += action.moveTop),
  });
};

const rightArrowControl = (state, action) => {
  return utility(state, {
    profileTranslateX: (state.profileTranslateX -= action.moveRight),
    textTranslateX: (state.textTranslateX -= action.moveBottom),
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_PROFILE_LENGTH_AND_TRANSLATE:
      return setProfileLengthAndTranslate(state, action);
    case actionType.LEFT_ARROW_CONTROL:
      return leftArrowControl(state, action);
    case actionType.RIGHT_ARROW_CONTROL:
      return rightArrowControl(state, action);
    default:
      return state;
  }
};

export default reducer;
