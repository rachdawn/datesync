import { TopNavBar } from '../../TopNavBar'

// The callback-page.js component will only render the navigation bar and an empty content container to help us create a smooth transition between a route with no content, /callback, to a route with content, such as the /profile page.

export const CallbackPage = () => {
  return (
    <div className="page-layout">
      <TopNavBar />
      <div className="page-layout__content" />
    </div>
  );
};