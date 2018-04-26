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
        v-model="credentials.password"
      >
    </div>
    <p> {{par}} </p>
    <button class="btn btn-primary" @click="submit()">Next</button>
  </div>
</template>

<script>

export default {
  name: 'signupinfo',
  created: function(){
    this.par = "joe"
    //if (this.$route.params.username) {
    //this.par = $route.params.username
    //this.par = "joe"
   // }
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