# React and Google CloudStore ToDo Application

A basic ToDo application does create a new task and then you can delete or remove it from the list. That application is created used with React, Redux, and Cloud Firestore with Anonymous Authentication for the challenge. From the beginning of the challenge, we care about is architecture, and this way we caught clearly structure and data set and manage to easy side effects because of Hooks and Redux Thunk.

## Demo

```
https://todo-firebase-xi.vercel.app
```

![React App](https://user-images.githubusercontent.com/18482866/104649688-263d5880-56c6-11eb-8574-b998f298f9ed.gif)

## Installation

### 1- Fork Repository

```sh
$ git clone git@github.com:<username>/todo-cs.git
```

### 2- Create a .env file in your root folder

The `.env` file includes some important configuration settings. That's why you should create a new `.env` file in project. You can set these configurations if you need but now you can use the below config directly.

```
REACT_APP_API_KEY =
REACT_APP_AUTH_DOMAIN = qooper-interview.firebaseapp.com
REACT_APP_PROJECT_ID = qooper-interview
REACT_APP_STORAGE_BUCKET = qooper-interview.appspot.com
REACT_APP_MESSAGING_SENDER_ID =
REACT_APP_APP_ID =
REACT_APP_TODOS_COLLECTION_NAME = todos
REACT_APP_USERS_COLLECTION_NAME = users
```

### 3- Install the dependencies and start the server

```
$ yarn
$ yarn start
```
