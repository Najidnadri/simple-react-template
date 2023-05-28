# Getting Started with Simple React Template

It is suprisingly hard to find a well organized `React` beginner-template out there with all the basic features included. Hence, I created this repo. There's really nothing much added to this repo besides some utils to make your development easier. So you dont really need to worry about any other third-party dependencies learning.

This repo uses [Vite](https://vitejs.dev/guide/), and [React Router](https://reactrouter.com/en/main) as the base foundation.

## Features
- 100% Typescript
- Organized projects folders
- Easy global state management (See [store](./src/store/index.tsx) directory)
- Easy page routing management (see [router](./src/router/index.tsx) directory)

## Installation
Clone this repo 
```bash
git clone https://github.com/Najidnadri/simple-react-template <project-name>
```
Go into your project folder and install dependencies
```bash
cd <project-name>
npm ci
```
Finally, run in development mode
```bash
npm run dev
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:) to5173 view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
