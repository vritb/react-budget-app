# Getting Started with Create React App

## Acknowledgement

This project was forked from [WebDevSimplified/Kyle](https://github.com/WebDevSimplified/react-budget-app.git).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

1. Install create-react-app
   
    ```sh
    npm install -g create-react-app
    ```

2. Install Bootstrap

    The application uses _Bootstrap_ for UI components and layout. We also need the _react_ adaption to bootstrap.

    ```sh
    npm install --save react-bootstrap bootstrap@5.1.3
    ```

3. Install Dependent Modules

    ```sh
    npm install
    ```

## Verify Successful Intallation

Start the webapp via _npm_.

```sh
npm start
```

Your default browser should open and display the following:

![Intial Screen](img/react-budget-app-initial-screen.jpg)

## Running The App In Production Mode 

1. Install A Server

    ```sh
    npm install -g serve
    ```

1. Build Prodction App

    ```sh
    npm run build
    ```

1. Run The Server From build directory

    ```sh
    serve -s build
    ```

The console will show:

![Serving Production Build](img/react-budget-app-serve-production.jpg)

1. Your Browser Shows

![Sample Budgets](img/react-budget-app-sample-budgets-screen.jpeg)

## Ready To Migrate

The migration will be done according to the steps listed in [React Docs](https://create-react-app.dev/docs/adding-typescript).

1. Step: Install typescript to your project
   npm install --save typescript @types/node @types/react @types/react-dom @types/jest

2. Step: Change File Extension (.js->tsx)

   
---------------------------------------
Original Create-React-App Documentation
----------------------------------------

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

![ServingProductionBuild](img/react-budget-app-sample-budgets-screen.jpeg)

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
