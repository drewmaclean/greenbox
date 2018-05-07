<template>
  <v-app id="inspire" dark>
    <gb-header></gb-header>
    <v-container fluid fill-height id="app">
        <v-layout flex align-center justify-center >
          <v-card-title class="grey darken-3" hover = "true">
            <div>
              <h2>Log In</h2>
              <p>Log in to your account to get some great quotes.</p>
              <div class="alert alert-danger" v-if="error">
                <p>{{ error }}</p>
              </div>
              <v-text-field prepend-icon="person" v-model="credentials.username" name="Username" label="Username"></v-text-field>
              <v-text-field prepend-icon="lock" v-model="credentials.password" name="Password" label="Password" type="password"></v-text-field>
              <v-flex>
                 <router-link to="/signup" tag="button">
                  <button class="btn btn-primary" @click="login()">Login</button>
                </router-link>
                <router-link to="/signup" tag="button">
                  <button class="btn btn-primary">Sign Up</button>
                </router-link>
              </v-flex>
              <router-view></router-view>
            </div>
          </v-card-title>
        </v-layout>
      </v-container>
    <gb-footer></gb-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import gbHeader from './Header.vue'
import gbFooter from './Footer.vue'
export default {
  name: 'login',
  components: {
    gbHeader,
    gbFooter
  },
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: ''
    }
  },

  methods: mapActions([
    "login"   
  ])
}
</script>

<style>
  .form-group {color:whitesmoke}
</style>
