# "Sherlock" unofficial

A rough, incomplete, completely unofficial implementation of the card game, "Sherlock" by Reinhard Staupe. The card game was published by Staupe Spiele (1999).

This is just meant as a React and CSS practice project.

## TODO:

- [x] add the concept of players
- [x] add game over
- [ ] oops, it is not the current player who gets to make initial placement at the start of their turn, rather the person anticlockwise of them (counter to the order of players).
- [ ] Don't allow the player to move the marker just anywhere
- [ ] animations
- [ ] add variant: each card has points (1 to 3, or perhaps just 2 or 3)

# State diagram

![image](https://user-images.githubusercontent.com/69844/181218066-ef50ca3e-04bc-4bd2-9f7c-9f9d7b28d465.png)

# Dependency Graph

![dependencyGraph](./docs/dependencygraph.svg)

How to generate the dependency graph:
**if you have graphviz installed**, generate with `yarn run architecture-svg`

**otherwise**, use `yarn run architecture-dot` and copy the text of the generated .dot file in `docs/` to an online graphviz tool (a random example https://dreampuf.github.io/GraphvizOnline )

This graph is generated with the [dependency-cruiser](https://www.npmjs.com/package/dependency-cruiser) library.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
