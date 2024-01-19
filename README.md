# Social Network API

## Description

The Social Network API is a RESTful web service that provides the backend functionality for a social networking web application. Users can share their thoughts, react to friends' thoughts, and manage their friend lists.

This project uses Express.js for routing, MongoDB as the database, and Mongoose as the Object Data Modeling (ODM) library.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo Video](#demo-video)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:LandonP172/social-mediaAPI.git
   ```
   
2. Install the dependencies
   ```bash
   npm install
   ```

3. Seed the database
   ```bash
   npm run seed
   ```

4. Start the server
   ```bash
   npm start
   ```
The server should now be running locally at http://localhost:3001

## Usage
To interact with the API you can use [Insomnia](https://insomnia.rest/download)

* GET /api/users: Get a list of all users.
* GET /api/users/:userId: Get a specific user by ID.
* POST /api/users: Create a new user.
* PUT /api/users/:userId: Update a user by ID.
* DELETE /api/users/:userId: Delete a user by ID.
* GET /api/thoughts: Get a list of all thoughts.
* GET /api/thoughts/:thoughtId: Get a specific thought by ID.
* POST /api/thoughts: Create a new thought.
* PUT /api/thoughts/:thoughtId: Update a thought by ID.
* DELETE /api/thoughts/:thoughtId: Delete a thought by ID.
* POST /api/reactions: Create a new reaction to a thought.
* DELETE /api/reactions/:reactionId: Delete a reaction by ID.
* POST /api/friends/:userId: Add a user to the friend list of another user.
* DELETE /api/friends/:userId: Remove a user from the friend list of another user.

## Demo-Video
Here is a walkthrough of a basic use of [this API](https://drive.google.com/file/d/1PZYK2-B_5wYU5LCrch-DMhO9T-mYHdU4/view)

## Contributers
[Me!](https://github.com/LandonP172)

## License
This project is licensed under the [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)
