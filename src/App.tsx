import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/global";

import Routes from "./routes";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
      <Routes />
    </Provider>
  );
}

export default App;
