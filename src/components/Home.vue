
<template>
  <v-app id="inspire" dark>
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