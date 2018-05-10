
<template>
  <v-app id="inspire" dark>
    <gb-header></gb-header>
    <v-container fluid fill-height id="app">
      <v-layout flex align-center justify-center>
        <v-jumbotron dark>
          <div>
<<<<<<< HEAD
            <h1>BUY POT HERE</h1>
            <v-flex>
              <router-link to="/signup" tag="button">
                <button class="btn btn-primary" @click="submit()">Login</button>
              </router-link>
              <router-link :to="{name:'signup', params:{showProf:false,showLic:false}}" tag="button">
                <button class="btn btn-primary">Sign Up</button>
              </router-link>
            </v-flex>
=======
            <h1>Start Gentax</h1>
            <router-link to="/Login" tag="button">Login Now</router-link>
            <br>
            <router-link to="/Test" tag="button">Test</router-link>
            <br>
            <router-link to="/Products" tag="button">Products</router-link>
            <div class="quote-area" v-if="quote">
              <h2><blockquote>{{ quote }}</blockquote></h2>      
            </div> 
>>>>>>> 9b25399ff4e05cc8a32487f54b95bc665b70d3ef
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