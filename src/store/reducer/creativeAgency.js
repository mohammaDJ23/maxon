import * as actionType from "../actions/actionType";
import utility from "../../share/utility";

const initialState = {
  heightOfHeader: null,
  showLeftContent: true,
  showShapeOnMiddleAndRightContent: true,
  showRightContent: true,
  leftContentWidth: null,
  middleContentWidth: null,
  rightContentWidth: null,
  height: null,
  shapes: {
    leftContent: {
      orangeShape: {
        top: 20,
        left: 30,
        rotation: 30,
        borderColor: "#ff7214",
      },
      mauveShape: {
        bottom: 20,
        left: 18,
      },
      pinkShape: {
        top: 40,
        left: 40,
        rotation: 50,
      },
    },
    middleContent: {
      pinkShape: {
        bottom: 16,
        right: 18,
      },
    },
    rightContent: {
      orangeShape: {
        top: 12,
        left: 10,
      },
      blueShape: {
        bottom: 13,
        left: 13,
      },
      hepaticShape: {
        top: 10,
        right: 14,
      },
      paths:
        "M358.040,36.772 C379.249,26.097 399.233,17.119 419.124,10.810 C429.060,7.649 438.955,5.146 448.860,3.358 C453.812,2.464 458.765,1.748 463.720,1.213 C468.675,0.678 473.631,0.325 478.586,0.152 C518.144,-1.360 558.130,9.472 592.746,27.711 C627.508,45.902 656.021,70.712 676.201,97.287 C696.604,124.280 708.675,153.041 715.704,188.770 C719.204,206.743 721.336,225.948 722.614,247.134 C723.248,257.719 723.658,268.789 723.861,280.361 C723.962,286.144 724.011,292.053 724.005,298.082 C723.999,304.111 723.939,310.260 723.821,316.522 C722.780,366.397 718.585,424.703 705.525,479.612 C692.649,534.567 669.601,584.332 634.291,618.391 C599.361,653.108 552.168,672.119 499.776,680.788 C473.546,685.187 447.292,687.096 421.689,687.745 C408.881,688.059 396.224,688.038 383.754,687.748 C377.519,687.601 371.330,687.386 365.190,687.105 C359.050,686.823 352.959,686.475 346.920,686.060 C298.619,682.655 253.540,675.510 212.793,660.374 C131.503,632.010 67.851,560.689 26.225,450.273 C16.160,423.270 8.511,395.961 4.385,369.755 C2.324,356.649 1.151,343.816 0.998,331.396 C0.921,325.185 1.099,319.078 1.545,313.087 C1.991,307.095 2.704,301.221 3.695,295.474 C11.235,249.248 38.571,212.527 79.617,183.338 C120.185,153.864 172.910,130.899 221.522,106.796 C270.846,83.186 316.056,58.437 358.040,36.772 L358.040,36.772 Z",
    },
  },
};

const setHeightOfHeader = (state, action) =>
  utility(state, { heightOfHeader: action.height });

const hideLeftContent = (state, action) =>
  utility(state, { showLeftContent: false });

const showLeftContent = (state, action) =>
  utility(state, { showLeftContent: true });

const hideShapeOnMiddleAndRightContent = (state, action) =>
  utility(state, { showShapeOnMiddleAndRightContent: false });

const showShapeOnMiddleAndRightContent = (state, action) =>
  utility(state, { showShapeOnMiddleAndRightContent: true });

const showRightContent = (state, action) =>
  utility(state, { showRightContent: true });

const hideRightContent = (state, action) =>
  utility(state, { showRightContent: false });

const getStyleForThreeContent = (state, action) => {
  return utility(state, {
    leftContentWidth: action.widths[0],
    middleContentWidth: action.widths[1],
    rightContentWidth: action.widths[2],
    height: action.height,
  });
};

const getStyleForTwoContent = (state, action) => {
  return utility(state, {
    eftContentWidth: null,
    middleContentWidth: action.widths[0],
    rightContentWidth: action.widths[1],
    height: action.height,
  });
};

const orangeShapeStyleLeftContent = (state, action) => {
  const secFour = utility(state.shapes.leftContent.orangeShape, {
    top: action.randomHeight,
    left: action.randomWidth,
    rotation: (state.shapes.leftContent.orangeShape.rotation += 100),
    borderColor: action.randomColors,
  });

  const secThree = utility(state.shapes.leftContent, {
    orangeShape: secFour,
  });

  const secTwo = utility(state.shapes, { leftContent: secThree });
  return utility(state, { shapes: secTwo });
};

const pinkShapeStyleLeftContent = (state, action) => {
  const secFour = utility(state.shapes.leftContent.pinkShape, {
    top: action.randomHeight,
    left: action.randomWidth,
    rotation: (state.shapes.leftContent.pinkShape.rotation += 100),
  });

  const setThree = utility(state.shapes.leftContent, { pinkShape: secFour });
  const setTwo = utility(state.shapes, { leftContent: setThree });
  return utility(state, { shapes: setTwo });
};

const mauveShapeStyleLeftContent = (state, action) => {
  const secFour = utility(state.shapes.leftContent.mauveShape, {
    bottom: action.randomHeight,
    left: action.randomWidth,
  });

  const secThree = utility(state.shapes.leftContent, { mauveShape: secFour });
  const secTwo = utility(state.shapes, { leftContent: secThree });
  return utility(state, { shapes: secTwo });
};

const pinkShapeStyleMiddleContent = (state, action) => {
  const secFour = utility(state.shapes.middleContent.pinkShape, {
    bottom: action.randomHeight,
    right: action.randomWidth,
  });

  const secThree = utility(state.shapes.middleContent, {
    pinkShape: secFour,
  });

  const secTwo = utility(state.shapes, { middleContent: secThree });
  return utility(state, { shapes: secTwo });
};

const orangeShapeStyleRightContent = (state, action) => {
  const secFour = utility(state.shapes.rightContent.orangeShape, {
    top: action.randomHeight,
    left: action.randomWidth,
  });

  const secThree = utility(state.shapes.rightContent, {
    orangeShape: secFour,
  });

  const secTwo = utility(state.shapes, { rightContent: secThree });
  return utility(state, { shapes: secTwo });
};

const blueShapeStyleRightContent = (state, action) => {
  const secFour = utility(state.shapes.rightContent.blueShape, {
    bottom: action.randomHeight,
    left: action.randomWidth,
  });

  const secThree = utility(state.shapes.rightContent, { blueShape: secFour });
  const secTwo = utility(state.shapes, { rightContent: secThree });
  return utility(state, { shapes: secTwo });
};

const hepaticShapeStyleRightContent = (state, action) => {
  const secFour = utility(state.shapes.rightContent.hepaticShape, {
    top: action.randomHeight,
    right: action.randomWidth,
  });

  const secThree = utility(state.shapes.rightContent, {
    hepaticShape: secFour,
  });

  const secTwo = utility(state.shapes, { rightContent: secThree });
  return utility(state, { shapes: secTwo });
};

const pathStyleRightContent = (state, action) => {
  const secThree = utility(state.shapes.rightContent, {
    paths: action.randomPath,
  });

  const secTwo = utility(state.shapes, { rightContent: secThree });
  return utility(state, { shapes: secTwo });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_HEIGHT_OF_HEADER:
      return setHeightOfHeader(state, action);
    case actionType.HIDE_LEFT_CONTENT_OF_CREATIVE_AGENCY:
      return hideLeftContent(state, action);
    case actionType.SHOW_LEFT_CONTENT_OF_CREATIVE_AGENCY:
      return showLeftContent(state, action);
    case actionType.HIDE_SHAPE_ON_MIDDLE_CONTENT_AND_RIGHT_CONTENT:
      return hideShapeOnMiddleAndRightContent(state, action);
    case actionType.SHOW_SHAPE_ON_MIDDLE_CONTENT_AND_RIGHT_CONTENT:
      return showShapeOnMiddleAndRightContent(state, action);
    case actionType.SHOW_RIGHT_CONTENT:
      return showRightContent(state, action);
    case actionType.HIDE_RIGHT_CONTENT:
      return hideRightContent(state, action);
    case actionType.GET_STYLE_FOR_THREE_CONTENT:
      return getStyleForThreeContent(state, action);
    case actionType.GET_STYLE_FOR_TWO_CONTENT:
      return getStyleForTwoContent(state, action);
    case actionType.ORANGE_SHAPE_STYLE_LEFT_CONTENT:
      return orangeShapeStyleLeftContent(state, action);
    case actionType.PINK_SHAPE_STYLE_LEFT_CONTENT:
      return pinkShapeStyleLeftContent(state, action);
    case actionType.MAUVE_SHAPE_STYLE_LEFT_CONTENT:
      return mauveShapeStyleLeftContent(state, action);
    case actionType.PINK_SHAPE_STYLE_MIDDLE_CONTENT:
      return pinkShapeStyleMiddleContent(state, action);
    case actionType.ORANGE_SHAPE_STYLE_RIGHT_CONTENT:
      return orangeShapeStyleRightContent(state, action);
    case actionType.BLUE_SHAPE_STYLE_RIGHT_CONTENT:
      return blueShapeStyleRightContent(state, action);
    case actionType.HEPATIC_SHAPE_STYLE_RIGHT_CONTENT:
      return hepaticShapeStyleRightContent(state, action);
    case actionType.PATHS_STYLE_RIGHT_CONTENT:
      return pathStyleRightContent(state, action);
    default:
      return state;
  }
};

export default reducer;
