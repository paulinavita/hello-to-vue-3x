import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import { plugin } from 'vue-function-api'

Vue.use(Router);
Vue.use(plugin)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
