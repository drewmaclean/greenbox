<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile @click="$vuetify.goTo(target, options)">
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Search</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- <v-list-tile @click="$vuetify.goTo(target, options)">
          <v-list-tile-action>
            <v-icon>spa</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Pot</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$vuetify.goTo(target, options)">
          <v-list-tile-action>
            <v-icon>smoking_rooms</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Joints</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$vuetify.goTo(target, options)">
          <v-list-tile-action>
            <v-icon>smoke_free</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Edibles</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$vuetify.goTo(target, options)">
          <v-list-tile-action>
            <v-icon>kitchen</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Munchies</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$vuetify.goTo(target, options)">
          <v-list-tile-action>
            <v-icon>kitchen</v-icon>
          </v-list-tile-action>
        </v-list-tile> -->
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Greenbox</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container >
        <v-layout row wrap>
          <v-flex xs12>
            <h2 id="pot">1</h2>
          </v-flex>
          
          <v-flex xs12>
            <h2 id="joints">2</h2>
          </v-flex>
          
          <v-flex xs12>
            <h2 id="edibles">3</h2>
          </v-flex>
          
          <v-flex xs12>
            <h2 id="munchies">4</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017 Greenbox</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    drawer: true
  },
  props: {
    source: String
  }//,
  // computed: {
  //   options () {
  //      return {
  //       duration: 500,
  //       offset: -100,
  //       easing: 'easeInOutCubic'
  //     }
  //   },
  //   target () {
  //     return '#munchies'
  //   }
  //}
};
</script>

<style>

</style>
