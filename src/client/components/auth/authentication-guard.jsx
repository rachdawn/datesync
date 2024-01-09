import { withAuthenticationRequired } from "@auth0/auth0-react";
import { PageLoader } from "../PageLoader";
import "../../styles/layouts/page-layout.scss"


// The <AuthenticationGuard> component requires users to log in before they can access a React route. A guard is a tool that helps us promote data privacy and protection as well as user interface customization. The <AuthenticationGuard> is a wrapper component that uses withAuthenticationRequired to make it reusable for the components that we need to protect.
// Therefore, we can pass the <AuthenticationGuard> organically as an element to the <Route> component from React Router:
export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <PageLoader />
      </div>
    ),
  });

  return <Component />;
};