import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/index.css";
import {
  ApolloProvider,
  createNetworkInterface,
  ApolloClient
} from "react-apollo";

const networkInterface = createNetworkInterface({
  uri: "https://api.graph.cool/simple/v1/cj5rk3fmx8bqz0122qs9vi2ee"
});

const client = new ApolloClient({
  networkInterface
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
