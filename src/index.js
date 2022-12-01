import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "./Store";
import { DataService } from "./Services/DataService";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const store = configureStore();

const srvcBehaviour = {
  Mock: false,
  AppStore: store,
};

const client = new ApolloClient({
  uri: "https://api.ss.dev/resource/api",
  cache: new InMemoryCache(),
});

DataService.SetServiceBehaviour(srvcBehaviour);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
