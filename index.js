import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./style.css";
const initialState = {
  count: 0
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "incriment":
      return {
        count: state.count + 1
      };
    case "decrement":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}
const store = createStore(reducer);
store.dispatch({ type: "incriment" });
store.dispatch({ type: "decrement" });
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
