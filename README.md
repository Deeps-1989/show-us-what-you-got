# show-us-what-you-got

## Introduction
This repository is given to new candidates to get a feel for how we would work together.

The repository contains three projects: test-one, test-two, and test-three.

Projects one and two use the following technologies:

- NodeJS
- NPM - package manager
- Babel - to transpile ES6 to ES5
- Mocha - a test runner
- Chai - an assertion engine
- Sinon - a mocking framework

Project three leaves the technology decisions up to you!

Please fork this repository, commit as necessary, create a pull request for us to review, and send an email to let us know that you have finished.

The details of the individual challenges follow, along with step by step instructions to get up and running once you have a local clone of the repository. Good luck : )

## Test One

Write a program that prints the numbers from 1 to 100. But for multiples of three print 'Boss' instead of the number and for the multiples of five print 'Hog'. For numbers which are multiples of both three and five print 'BossHog'.

### Getting Started

Make sure you have the latest version of node installed. Visit the nodeJS website and download the latest install package (the package manages upgrades too).

Open a console window/tab to the 'test-one' project directory and run the following commands...

Download project dependencies.

```
npm install

```
Transpile code from src folder to lib folder
```
npm run compile

```
Run unit tests
```
npm test

```
and finally start the program
```
npm run go

```
Note that you can use the following command to compile, test and run the program every time you save a file (instead of running the above three commands every time you want to test your changes)
```
npm start

```
Now when you change code in the project src folder, nodemon will re-transpile, re-run unit tests, and re-start the program. See for yourself, go ahead and try changing the value of the message variable in test-one/src/index.js.

## Test Two

Currently, the 'test two' project makes requests to the GitHub API and outputs the first page of users belonging to Uber's GitHub organisation. What we'd really like to see is a list of repositories for each user, for **all** Uber GitHub users.

Just to clarify, by the time you've completed the challenge, the program...

* should output all Uber GitHub users
* should output all repositories for each user

Note that the GitHub API limits requests, and you will definitely reach the anonymous request limit while implementing this solution. To overcome this limit you will need to generate an OAuth key in your GitHub account's developer settings, and paste the key into the gitHubApiAuthToken constant in test-two/src/index.js

### Getting Started

Make sure you have the latest version of node installed. Visit the nodeJS website and download the latest install package (the package manages upgrades too).

Open a console window/tab to the 'test-two' project directory and run the following commands...

Download project dependencies.

```
npm install

```
Transpile code from src folder to lib folder
```
npm run compile

```
Run unit tests
```
npm test

```
and finally start the program
```
npm run go

```
Note that you can use the following command to compile, test and run the program every time you save a file (instead of running the above three commands every time you want to test your changes)
```
npm start

```
Now when you change code in the project src folder, nodemon will re-transpile, re-run unit tests, and re-start the program. See for yourself, go ahead and try changing test-two/src/index.js.

## Test Three

## Running the project

To compile and build the project:
1. cd into test-three and run `npm install`
1. use `npm start` command wait for webpack to compile package and node server to start
1. Run `http://localhost:3000` to see the webpage. Make sure 3000 is not occupied otherwise server wont start.

Running Test:
1. Make sure all dependencies are installed via `npm install`
1. When dependencies are installed node_modules folder will be created
1. Now run `npm test`
