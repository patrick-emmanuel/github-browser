# GitHub Browser

## Getting started

```
    $ git clone https://github.com/the-bionic/github-browser.git
    $ cd github-browser
    $ npm install
    $ npm start
```

## Design Decisions

### No Router
The app was not built with routing configured, because all the magic happens on a single page. The app was built with an accordion, such that, the user does not need to be taken to a different page to see the results of their action. This decision was made intentionally to eliminate the overhead UX problem of navigating to an extra page when it could be displayed with a better visual hierachy on the same page.

### Responsiveness
Responsiveness is mobile-first. The styles are implemented mobile-first and subsequent media queries are tailored to larger screen sizes. That way, the breakpoints 300px - 1920px are well covered.

### No submit button
API requests are debounced while the user is typing their keywords. The overhead for an extra click is not required by the user to perforn a search.

## End to End tests.
End-to-end tests was implemented with puppeteer, and runs on Travis CI.

## Extra Thoughts
The tests produce warnings when ran. It is a known issue in React: [here](https://github.com/facebook/react/)issues/14769 and a fix is in alpha and has not been released yet. It is due to the tests interaction/updating the dom causing state changes.

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
