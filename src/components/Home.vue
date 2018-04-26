<template>
  <div>
    <h1>BUY POT HERE</h1>
    <router-link to="/Login" tag="button">Shop Now</router-link>
    <div class="quote-area" v-if="quote">
      <h2><blockquote>{{ quote }}</blockquote></h2>      
    </div>
    <router-view></router-view>
  </div>
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
    getQuote() {
      this.$http
        .get('http://localhost:3001/api/random-quote', (data) => {
          this.quote = data;
        })
        .error((err) => console.log(err))
    }
  }

}
</script>