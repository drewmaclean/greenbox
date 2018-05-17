<template>
  <div>
    <v-toolbar-title prominent = "true">SpaceCase - logged in: {{loggedIn}}</v-toolbar-title>
    <br>
    <router-link to="/Cart" tag="button">
      <v-badge style="float:left" right>
        <span slot="badge">{{cartItemCount}}</span>
        <v-icon large color="grey lighten-1">shopping_cart</v-icon>
      </v-badge>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'gb-header',
  computed: { 
    ...mapGetters([
      'loggedIn',
      'cartItemCount'
    ]),
  }
}
</script>

<style>

</style>
