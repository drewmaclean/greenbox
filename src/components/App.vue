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
  <nav class="navbar navbar-default">
    <div class="container">
      <ul class="nav navbar-nav">
        <div style="text-align:center">
            <h1 v-if="$route.name != 'default'">BUY POT HERE</h1>
            <router-link v-if="$route.name != 'default'" to="/Login" tag="button">Shop Now</router-link>
            <router-link v-if="$route.name != 'default'" to="/Home" tag="button">Home</router-link>
            <router-view></router-view>
        </div>
      </ul>
    </div>
  </nav>
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

