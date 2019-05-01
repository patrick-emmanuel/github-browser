# GitHub Browser

[![Build Status](https://travis-ci.org/the-bionic/github-browser.svg?branch=master)](https://travis-ci.org/the-bionic/github-browser)

## Getting started

```
    $ git clone https://github.com/the-bionic/github-browser.git
    $ cd github-browser
    $ npm install
    $ npm start
```

## Design Decisions

### Responsiveness
Responsiveness is mobile-first. The styles are implemented mobile-first and subsequent media queries are tailored to larger screen sizes. That way, the breakpoints 300px - 1920px are well covered.

### No submit button
API requests are debounced while the user is typing their keywords. The overhead for an extra click is not required by the user to perform a search.

## End to End tests.
End-to-end test was implemented with puppeteer, and runs on Travis CI.

## Extra Thoughts
The React tests produce warnings when ran. It is a known issue in React: [here](https://github.com/facebook/react/issues/14769) and a fix is in alpha and has not been released yet. It is due to the tests interaction/updating the dom causing state changes.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
