import React from "react";
import ReactDOM from "react-dom";

//to use redux imoort provider from redux
import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import App from "./App";

//bootstrap & Fontawesome
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
