# vue-webpack-boilerplate

> A Vue.js project

Boilerplate based on the Vue webpack template with authentication via firebase.

Difference between This and the [vue-webpack](https://github.com/vuejs-templates/webpack) template:
- vue-loader (/auth, /dashboard, 404)
- Firebase Authentication
- StandardJS Style Guide
- CircleCI.yml [![CircleCI](https://circleci.com/gh/maxmckenzie/vue-webpack-boilerplate.svg?style=svg)](https://circleci.com/gh/maxmckenzie/vue-webpack-boilerplate)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Roadmap
- Test Authentication
- Test Routes
- Add Vuex store
- Sync Vuex store with firebase
- Add test for Vuex store
- Add example CRUD Component to view

/* Eventually */
- Fork Vue-Webpack template
- Port Boilerplate Codebase into fork
- Add Airbnb Style Guide as option
- Test vue-cli init and write some docs
