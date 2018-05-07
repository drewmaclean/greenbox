
<template>
  <v-app id="inspire" dark>
    <gb-header></gb-header>
    <v-container fluid fill-height id="app">
      <v-layout flex align-center justify-center>
        <v-jumbotron dark>
          <div>
            <h1>Start Gentax</h1>
            <router-link to="/Login" tag="button">Login Now</router-link>
            <br>
            <router-link to="/Test" tag="button">Test</router-link>
            <br>
            <router-link to="/Products" tag="button">Products</router-link>
            <div class="quote-area" v-if="quote">
              <h2><blockquote>{{ quote }}</blockquote></h2>      
            </div> 
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