import { ApolloProvider } from "@apollo/client";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { GlobalStyle } from "./assets/styles/global";
import { client } from "./config/apollo-client-graphql";
import { ListProvider } from "./context/ListContext";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <ListProvider>
        <App />
      </ListProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
