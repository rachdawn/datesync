import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";

import App from './App';

// The Auth0ProviderWithNavigate requires the BrowserRouter component from React Router to be its parent.

// The Context from React Router must be present in the component tree at a higher level for Auth0ProviderWithNavigate to access the useNavigate() hook from React Router.
ReactDOM.createRoot(document.getElementById("root")).render(
 
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  
);
