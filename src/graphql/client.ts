import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";
import { store } from "../app/store";

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === "development"
      ? "https://graph.staging.dukesell.dev"
      : process.env.REACT_APP_GRAPHQL_API_GATEWAY
});

//console.log(process.env.REACT_APP_GRAPHQL_API_GATEWAY, "::DEBUG")

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("access_token");
  // const country = store.getState().shop.shop?.country ?? "GH";
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
     //country,
      source: "store-front",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
