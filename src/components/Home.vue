
<template>
  <v-app id="inspire" dark>
    <gb-header></gb-header>
    <v-container fluid fill-height id="app">
      <v-layout flex align-center justify-center>
        <v-jumbotron dark>
          <div>
            <h1>BUY POT HERE</h1>
            <v-flex>
              <router-link to="/signup" tag="button">
                <button class="btn btn-primary" @click="submit()">Login</button>
              </router-link>
              <router-link :to="{name:'signup', params:{showProf:false,showLic:false}}" tag="button">
                <button class="btn btn-primary">Sign Up</button>
              </router-link>
            </v-flex>
            <v-flex>
              <router-link to="/Test" tag="button">
                <button class="btn btn-primary">Test</button>
              </router-link>
              <router-link to="/Products" tag="button">
                <button class="btn btn-primary">Products</button>
              </router-link>
            </v-flex>
          </div>
        </v-jumbotron>
      </v-layout>
    </v-container>

    <router-view></router-view>
    <gb-footer></gb-footer>
  </v-app>
</template>

<script>
import gbHeader from './Header.vue'
import gbFooter from './Footer.vue'
export default {
  name: 'home',
  components: {
    gbHeader,
    gbFooter
  },
  data() {
    return {
      quote: ''
    }
  },

  methods: {
  }

}
</script>