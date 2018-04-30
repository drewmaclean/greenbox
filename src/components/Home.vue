
<template>
  <v-app id="inspire" dark>
    <v-container fluid fill-height id="app">
      <v-layout flex align-center justify-center>
        <v-jumbotron dark>
          <div>
            <h1>BUY POT HERE</h1>
            <router-link to="/Login" tag="button">Shop Now</router-link>
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