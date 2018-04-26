<!--><template>
  <nav class="navbar navbar-default">
    <div class="container">
      <ul class="nav navbar-nav">
        <button class="btn btn-primary"> <router-link to ="/home">Home</router-link></button>
        <li v-if="!user.authenticated"><a v-link="'login'">Login</a></li>
        <li v-if="!user.authenticated"><a v-link="'signup'">Sign Up</a></li>
        <li v-if="user.authenticated"><a v-link="'secretquote'">Secret Quote</a></li>
        <li v-if="user.authenticated"><a v-link="'login'" @click="logout()">Logout</a></li>
      </ul>
       <router-view></router-view>
    </div> 
  </nav>
</template><!-->
<template>
  <div style="text-align:center">
    <h1>BUY POT HERE</h1>
    <button class="btn btn-primary">
      <router-link to="/Login">Shop Now</router-link>
    </button>
    <button class="btn btn-primary">
      <router-link to="/Home">Home</router-link>
    </button>
    <div class="quote-area" v-if="quote">
      <h2><blockquote>{{ quote }}</blockquote></h2>      
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      user: ''
    }
  },

  methods: {
  }
}
</script>

