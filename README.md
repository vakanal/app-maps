# App Maps with Redux Toolkit and Google Maps API

## How to install and run the app

### Local development

1. Install the dependencies:
```
npm install
```
1. Create an enviroment file called `.env` in the root of the project and put this content:
```
REACT_APP_GOOGLE_MAPS_API_KEY=<REPLACE_THIS_CONTENT_WITH_YOUR_API_KEY>
URL_TEST=http://localhost:3000/
```
3. Run the server:
```
npm start
```
4. Once the server is running, you can view the result in this url: http://localhost:3000/

## Deploy in GitHub Pages (Optional)

1. Create the bundle with reduce size using this command:
```
npm run build
```
2. Deploy into GitHub Pages using the following command:
```
npm run deploy
```
3. You can see the results in this url: https://vakanal.github.io/app-maps/

### Note
Read this tutorial for more information:
https://medium.com/mobile-web-dev/how-to-build-and-deploy-a-react-app-to-github-pages-in-less-than-5-minutes-d6c4ffd30f14

## How to run the tests E2E

1. The app server has to be running previously to run the E2E tests.

2. Run this command:
```
npm run cypress:open
```
