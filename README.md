[![Netlify Status](https://api.netlify.com/api/v1/badges/d403080a-6491-4c91-aed9-31e869dacde8/deploy-status)](https://app.netlify.com/sites/sfmvp/deploys)

Live Demo: <https://sfmvp.netlify.com/>

## Introduction

This project is the front-end track of Signafire's take home assignment. The framework I choose to use is React. Webpack is also utilized to build the project.  And the generated static files are deployed on Netlify.  

## Getting Start

* Install the dependencies:

  ```shell
  npm install
  ```

* Run the project, which is served by webpack-dev-server:

  ```shell
  npm run dev
  ```

* Build the project:

  ```shell
  npm run build
  ```

## Some Assumptions I made

* Trashing a message will not unstar it;
* Trashed messages can be restored in the "Trashed Message View" by clicking the untrash button next to the star button.
* Only the starred messages that are shown on the current view will be counted. That is to say, in the "Untrashed Message View", even though there exists some starred trashed messages, the length of starred messages will only take the untrashed messages into account. 
* Searching keywords can be triggered by either clicking the submit button or press the `Enter` key.
* You can exit searching by clicking the cancel button next to the submit button. This will clear the input and the highlights.

## Responsive Design

The breakpoint width is 415px. While being viewed on screens wider than 415px, only the header and the messages' contents are responsive. The min-width of them is set to 768px so as to make the layout look decent. For screens narrower than 415px, the layout is redesigned to provide better user experience for those mobile devices. (The details of layout can be checked in the live demo)