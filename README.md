# Date Planner

#### Screenshots

## Table of Contents

- [Introduction](#introduction)
- [Project Setup](#projectSetup)
- [Installation](#installation)
- [Database Setup](#databaseSetup)
- [Usage](#usage)
- [Configuration](#configuration)
- [Routes](#routes)
- [Middleware](#middleware)
- [Dependencies](#dependencies)
- [Future Developments](#futureDevelopments)
- [Challenges](#challenges)
- [Contributing](#contributing)
- [License](#license)

## Introduction

DateSync is the place where you can plan and create the best dates for you to share with your friends and loved ones. Take advantage of this amazing platform where you can search restaurants, events, movies and activities and put them together in

## Project Setup

This WebApp, HaggleHub, was the first experience that either member of our group had ever built. As such, it was important to find common ground as early in the process as possible to reduce any miscommunication and unwanted team dynamic. To combat this, we did the following:

- Built a project plan outline on a five day development period.
- Held daily morning SCRUM meetings.
- Invested time in the planning phase to design our user stories.
- Created the ERD and Database Schemas.

## Completed Features

- In-App Messaging: Currently a work in progress, this feature aims to facilitate communication between buyers and sellers directly within the app.
- User Requirements and Admin Specific Features: We've implemented core functionalities tailored to both regular users and admins, ensuring a robust and secure experience for managing listings and user interactions.

## Installation

To set up the project locally:

1. Clone the repository:

2. Navigate to the Project Directory

```
$  cd date_planner
```

3. Install Dependencies

```
$  npm install
```

## Database setup

To set up the database:

```
  $ npm install pg
```

1.Start Postgres server

```
$ startpostgres
```

2. Enter Postgres to begin creating schema and adding data to

```
$  psql
```

3. Create database

```
# CREATE DATABASE planner OWNER >!(insert postgresql username)!<;
```

## Usage

To run the web app locally, use the following commands:

1. Start the Server:

```
  $ npm run start
```

2. Open Your Browser: Navigate to http://localhost:3000.

# Configuration

## Routes

### User/Login/Logout Routes:

These routes are responsible for handling user authentication and user/admin authorization.

### Product Routes:

These routes are responsible for product categorization, product updating, deletion and information(stock) modification, as in the case of use by admin.

### Message Routes:

The routes primarily deal with messaging between user and admin. Due to the nature of time, these messages are attached to product id. Should we have more resources, we would love to expand these routes to include sockets for live chat functionality.

### Middleware

- morgan: HTTP request logger middleware.
- express.urlencoded: Middleware to parse incoming request bodies.
- sassMiddleware: Middleware for compiling SASS/SCSS files.
- express.static: Middleware for serving static files.
- cookieSession: Middleware for parsing incoming cookies.

### Dependencies

- bcryptjs
- chalk
- cookie-session
- dotenv
- ejs
- express
- morgan
- pg
- sass

### Future Developments

- Item Reviews: Incorporating a review system.
- Cart Functionality: Adding a shopping cart.
- Third-Party Authentication: Implementing more login options.
- Marketing Landing Page: Developing a dedicated landing page.
- Real-Time Messaging API: Upgrading the messaging system.
- User Feedback: Continuously improving based on user suggestions.
- Admin Features: Expanding the capabilities for admin users.

### Challenges

- Route/Endpoint Definition: Challenges in defining routes and endpoints.
- Backend-Frontend Integration: Ensuring seamless integration.
- In-App Messaging: Ongoing development of a robust messaging system.

## Contributing

This webApp was a labor of love of the LHL Alpha Group Trio. Comprised of Ana Franco, David Giroux and Gerald Mwangi. Many thanks to the instructors and mentors OF LHL whose opinions helped us build it.

## License

This project is licensed under the imaginary demo License of 2023. It does not expire nor is it issuable to anyone other than LHL Cohort of 16 Oct West. Any use of this license must be approved after by a committee of the LHL Alpha Group with a minimum wait period of 42 days since the date of license request.
