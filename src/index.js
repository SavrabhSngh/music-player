import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "./Store";
import { DataService } from "./Services/DataService";

const store = configureStore();

const srvcBehaviour = {
  Mock: false,
  AppStore: store,
};

DataService.SetServiceBehaviour(srvcBehaviour);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
