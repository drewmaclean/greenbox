<template>
  <div id="app">
    <!-- <h1>{{ msg }}</h1> -->
    <p>{{posts}}</p>
    <p>{{errors}}</p>
    <img height="100 px" width="100px" src="./Desert.jpg"/>
    <img height="100 px" width="100px" src="./assets/logo.png"/>

    <!-- <ul v-if="posts && posts.length"> -->
      <ul id="t1">
    <li v-for="post of posts" :key="post.data">
      <p><strong>{{post}}</strong></p>
      <!-- <p>{{post.body}}</p> -->
    </li>
  </ul>

  <!-- <ul v-if="errors && errors.length"> -->
    <ul id="t2">
    <li v-for="error of errors" :key="error.data">
      <p><strong>{{error}}</strong></p>
      
    </li>
  </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created() {
    axios.get(`https://w8ldp460na.execute-api.us-east-2.amazonaws.com/test/functionone`, {
    params: {
      a: '10',
      b: '22',
      c: '60'
    }
    })
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#t1 {
  color: blue
}

#t2 {
  color: green
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
