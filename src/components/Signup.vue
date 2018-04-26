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
        v-model="credentials.username"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="credentials.password"
      >
    </div>
    <router-link :to="{ name: 'signupinfo', params: { user: this.credentials.username, pass: this.credentials.password} }" @click="submit()">Next</router-link>
  </div>
</template>

<script>

export default {
  name: 'signup',
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
    }
  }
}
</script>