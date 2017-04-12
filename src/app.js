import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import components from './components'
import directives from './directives'
import filters from './filters'
import 'normalize.css'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global dependencies.
Vue.use(components)
Vue.use(directives)
Vue.use(filters)

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue({
    router,
    store,
    render: h => h(App)
})

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store }