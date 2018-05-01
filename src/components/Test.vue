<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <br>
    <button @click="increment">+</button>
    <br>
    <button @click="decrement">-</button>
    <br>
    <button @click="incrementIfOdd">Increment if odd</button>
    <br>
    <button @click="incrementAsync">Increment async</button>
  </div>
  <router-link to="/Test2" tag="button">Test2 Now</router-link
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>