<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Sign Up</h2>
    <p>Sign up for a good time.</p>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <input 
        type="text" 
        class="form-control"
        placeholder="Enter your username"
        v-model="this.credentials.username"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="this.credentials.password"
      >
    </div>
    <router-link to="/products" tag="button">Products</router-link>
    <v-footer app fixed>
      <span>&copy; 2017 Greenbox</span>
    </v-footer>
  </div>
</template>

<script>

export default {
  name: 'signupinfo',
  created: function(){
    this.credentials.username = this.$route.params.user
    this.credentials.password = this.$route.params.pass
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

  methods: {

    submit() {
    data: {
        var credentials = {
            username: this.credentials.username,
            password: this.credentials.password
        }
      }
    }
  }
}
</script>