# Interview Scheduler - Wilfred Emonts

A React app that allows a user to book an interview by choosing an available appointment slot, entering their name, selecting an interviewer, and then storing the data in a server database. Users can delete appointments, as well as edit existing ones.

## Screenshots

!['Create'](https://github.com/Emonster97/scheduler/blob/master/public/docs/create.png?raw=true)
!['Delete'](https://github.com/Emonster97/scheduler/blob/master/public/docs/delete.png?raw=true)
!['Edit'](https://github.com/Emonster97/scheduler/blob/master/public/docs/edit.png?raw=true)
!['Error'](https://github.com/Emonster97/scheduler/blob/master/public/docs/error.png?raw=true)

## Setup

Install dependencies with `npm install`.

dependencies: {
axios: ^0.25.0,
classnames: ^2.2.6,
normalize.css: ^8.0.1,
react: ^16.9.0,
react-dom: ^16.9.0,
react-scripts: “3.0.0”
}

Fork and clone `the scheduler-api` and follow the instructions to connect to the server db
scheduler-api
https://github.com/Emonster97/scheduler-api

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```