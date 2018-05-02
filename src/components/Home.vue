
<template>
  <v-app id="inspire" dark>
    <v-container fluid fill-height id="app">
      <v-layout flex align-center justify-center>
        <v-jumbotron dark>
          <div>
            <h1>Start Gentax</h1>
            <router-link to="/Login" tag="button">Upgrade Now</router-link>
            <br>
            <router-link to="/Test" tag="button">Test</router-link>
            <br>
            <router-link to="/Test2" tag="button">Test2</router-link>
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
    <v-footer app fixed>
      <span>&copy; 2017 Greenbox</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      quote: ''
    }
  },

  methods: {
  }

}
</script>