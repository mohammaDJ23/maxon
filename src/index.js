import React from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import App from "./App";
import homeReducer from "./store/reducer/home";
import creativeAgencyReducer from "./store/reducer/creativeAgency";
import navigationsReducer from "./store/reducer/navigations";
import testimonialsReducer from "./store/reducer/testimonials";
import layoutReducer from "./store/reducer/layout";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const reducers = combineReducers({
  home: homeReducer,
  creativeAgency: creativeAgencyReducer,
  navigations: navigationsReducer,
  testimonials: testimonialsReducer,
  layout: layoutReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
