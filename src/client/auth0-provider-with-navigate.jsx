import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_APP_AUTH0_CALLBACK_URL;

  // We use the useNavigate() hook to get the history object from React Router. We use the navigate() method to take users back to the route they intended to access before authentication:
  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  // We use the authorizationParams configuration object to define the query parameters that will be sent during the call to the Auth0 /authorize endpoint. As such, we are passing here the redirect_uri, which is the URL where Auth0 will redirect our users back to our React application:
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};