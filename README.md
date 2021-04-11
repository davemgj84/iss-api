# ISS-API

## About

- A simple backend node/express server for the I.S.S. Spotter application. (International Space Station Spotter)

- The Front End repository can be found here - https://github.com/davemgj84/iss-spotter

- A more thorough decription of the app can be found on the Front End repository's README

- Acts as a proxy or middleman for making API requests to the Open-Notify API, to fetch data for the next available times to see the Internation Space Station pass overhead.

## Location of deployed application

- The Front End application is deployed via Netlify and can be visited here:

  - to be determined - not yet deployed

## Instructions to run locally

- Fork this repository. Cd into the project folder, and run `npm install`.

- Create a `.env` file and add `PORT=8080` to the file. Just like the `.env.example` file.

- Once dependencies have been installed, and you may simply run `npm start` to start the server locally via `Port 8080`.

- Once the server is running, you can then use the Front End App to find out when you can see the Internation Space Station pass over head!

## Dependencies Include:

- Node - ^10.16.1
- Express - ^4.17.1
- Cors - ^2.8.5
- Axios - ^0.21.1
