import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloProvider } from "@apollo/client";
import client from './graphql/client.ts';
import { store } from './app/store.ts';
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
          
          <App />
        </Provider>
    
  </ApolloProvider>
)
