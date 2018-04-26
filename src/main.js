import Vue from "vue";
import App from "./App.vue";
import Products from "./Products.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

new Vue({
  el: "#app",
  render: h => h(Products)
});
