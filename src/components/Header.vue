<template>
  <v-toolbar-title prominent = "true">SpaceCase - logged in: {{loggedIn}}</v-toolbar-title>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'gb-header',
  computed: mapGetters([
    'loggedIn'
  ])
}
</script>

<style>

</style>
