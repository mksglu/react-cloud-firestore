# React and Google Cloud Firestore ToDo Application

A basic todo application does create a new task and then you can delete or remove it from the created list. Application is created basically with React and Redux. 
## Overview

For the database, we chose Google Cloud Firestore, and also authentication method entirely works with anonymous by Firebase, Google. From the beginning of the challenge, we care about is architecture and test driven development and this way we provided a clear structure and store so when about manage to easy side effects through Hooks, Styled Component, and Redux Thunk.

## Outlook
Anonymous entries may have been disabled due to the free Google Firebase. We recommend that you try it locally with your own Google Firebase account.
```
https://todo-firebase-xi.vercel.app
```
![react-cloud-firestore](https://user-images.githubusercontent.com/6067714/106344285-7a495f00-62ba-11eb-9d65-50e4be0160e6.gif)

## Dependencies and Configuration

The `.env` file includes some important configuration settings. That's why you should create a new `.env` file in the project. Create a new Web Application with Google Firebase and keep the configuration settings given to you and then you can make a new environment file with run `$ mv .env.local .env` command and then edits your own configurations.

## Production

You can build the application using the `$ npm run build` command and run it in production environment. For example, you can serve with AWS S3 or Vercel.

### Docker

The flexible testable application so you want to test your application with the React Router in a production environment, you can do this on port `8080` using Docker. You can find the necessary Nginx configuration settings in the Config directory.

| NPM | Docker |
| --- | --- |
| $ npm run docker-build | $ docker-compose build && docker-compose up -d |
| $ npm run docker-recreate | $ docker-compose build --no-cache && docker-compose up -d --force-recreate |

## Development

```
$ npm install
$ npm run start
```

## Test Driven Development

You can view the tests of all __components__ and the __Redux Store__ under the `__tests__` directory using the React Testing Library and Jest. You can run it with the command `npm run test`.
