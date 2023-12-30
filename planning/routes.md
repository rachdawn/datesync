<!-- This will serve as planning our routes using BREAD / REST convention -->

# Suggested RESTful API Endpoints

Frontend Routes with React Router (in Vite):

Auth0 manages the authentication state in our React app, so you we won't need explicit routes for login and registration forms. Instead, we can use Auth0's hooks and components to initiate login and registration processes.

Frontend routes considering Auth0:

Public Routes (can be accessed by visitors):

- (/) - Landing Page with hero section and featured dates carousel.

-(/try-date-plan) - Page for visitors to try creating a date plan (non-savable).

Protected Routes (Require Authentication):

These routes require a user to be authenticated. With Auth0, we can protect these routes using the withAuthenticationRequired higher-order component or similar means provided by the Auth0 SDK.

- (/dashboard) - User dashboard with tabs for past dates, upcoming dates, drafts, and all dates.
- (/create-date) - Page to create a new date plan.
- (/edit-date/:id) - Page to edit an existing date plan.
- (/date/:id) - Detailed view page for a specific date plan.

Auth0 Routes:

Auth0 will handle routes like /login and /signup implicitly. When we use methods like loginWithRedirect from the Auth0 SDK, Auth0 will handle the redirection to the Auth0 hosted login page and then redirect back to our application after a successful login.

Backend Routes with Node.js and Express:

Since Auth0 is managing the authentication, we won't need to create endpoints for user login or registration. However, we will still need endpoints to manage user data and resources within our application.

User Routes:

GET /api/users/:id - Retrieve user profile information (information can be pulled from the Auth0 token).
PUT /api/users/:id - Update user profile information.

Date Plan Routes:

GET /api/dates - Get all date plans for the logged-in user.
POST /api/dates - Create a new date plan.
GET /api/dates/:id - Get a specific date plan by ID.
PUT /api/dates/:id - Update a specific date plan.
DELETE /api/dates/:id - Delete a specific date plan.

Component Routes:

GET /api/components/restaurants - Get a list of restaurants (backend would talk to Google Places API).
GET /api/components/movies - Get a list of movies (backend would talk to a movies API).
GET /api/components/events - Get a list of events (backend would talk to Google Events API).
GET /api/components/activities - Get a list of activities (backend would talk to Google Places API).

Saving External Data:

POST /api/components/restaurants - Save a restaurant to the user's date plan.
POST /api/components/movies - Save a movie to the user's date plan.
POST /api/components/events - Save an event to the user's date plan.
POST /api/components/activities - Save an activity to the user's date plan.

Sharing and Drafts:

POST /api/dates/:id/share - Generate a shareable link for a date plan.
PUT /api/dates/:id/draft - Mark a date plan as a draft.

For the backend, we will need to implement middleware that verifies the JSON Web Token (JWT) access tokens sent by the frontend. This token can be used to perform actions on behalf of the authenticated user, such as accessing or modifying their data.


  
