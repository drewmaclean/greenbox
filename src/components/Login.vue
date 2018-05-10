<template>
  <v-app id="inspire" dark>
    <v-toolbar-title prominent = "true">SpaceCase</v-toolbar-title>
    <v-container fluid fill-height id="app">
        <v-layout flex align-center justify-center >
          <v-card-title class="grey darken-3" hover = "true">
            <div>
              <h2>Log In</h2>
              <p>Log in to your account to get some great quotes.</p>
              <div class="alert alert-danger" v-if="error">
                <p>{{ error }}</p>
              </div>
              <v-text-field prepend-icon="person" name="Username" label="Username"></v-text-field>
              <v-text-field prepend-icon="lock" name="Password" label="Password" type="password"></v-text-field>
              <v-flex>
                 <router-link to="/signup" tag="button">
                  <button class="btn btn-primary" @click="submit()">Login</button>
                </router-link>
                <router-link :to="{name:'signup', params:{showProf:false,showLic:false}}" tag="button">
                  <button class="btn btn-primary">Sign Up</button>
                </router-link>
              </v-flex>
              <router-view></router-view>
            </div>
          </v-card-title>
        </v-layout>
      </v-container>
    <v-footer app fixed>
      <span>&copy; 2017 Greenbox</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: ''
    }
  },

  methods: {

    submit() {

      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
    }
  }
  
}
</script>

<style>
  .form-group {color:whitesmoke}
</style>
