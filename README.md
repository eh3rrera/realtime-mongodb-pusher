# realtime-mongodb-pusher
React application that allows you to add and delete tasks. It communicates to an API implemented in Node.js that saves the changes to a database. The Node.js script also receives these changes using change streams, parsing them and publishing them to a Pusher channel so the React application can consume them. 

Follow the tutorial [here](https://pusher.com/tutorials/mongodb-change-streams).

## Getting Started

1. Clone this repository.
2. Create a [Pusher app](https://dashboard.pusher.com).
3. Enter your Pusher app information in `server/server.js` and in `client/src/App.js`.
4. In a terminal window, start MongoDB as a replica set of one server with the command: `mongod --dbpath <DATA_PATH> --replSet "rs"`.
5. In a separate terminal window, run `mongo`, the MongoDB client.
6. If this is the first time you set up a replica set, execute the command `rs.initiate()`.
7. Create the database `tasksDb` (`use tasksDb`) and the collection `tasks` (`db.createCollection('tasks')`).
8. In a separate terminal window, `cd` into the `server` directory and execute `npm install` to download the dependencies and then, `npm start` to start the server.
9. In a separate terminal window, `cd` into the `client` directory and execute `npm install` to download the dependencies and then, `npm start` to start the app.
10. A browser window will open, you can open another one to see how the task are replicated in realtime.

### Prerequisites

- [MongoDB (version 3.6 or superior)](https://www.mongodb.com/download-center#community)
- [Node.js (6 or superior)](https://nodejs.org/en/download/)

## Built With

* [MongoDB](https://www.mongodb.com/) - NoSQL database
* [Node.js](https://nodejs.org/en/) - A JavaScript runtime 
* [React](https://reactjs.org/) - A JavaScript library for building webapps
* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features

## Acknowledgments
* Thanks to [Pusher](https://pusher.com/) for sponsoring this tutorial.

## LICENSE
MIT
