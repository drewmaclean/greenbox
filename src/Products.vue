<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Search</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>spa</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Pot</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>smoking_rooms</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Joints</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>smoke_free</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Edibles</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>kitchen</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Munchies</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Greenbox</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <v-btn icon large :href="source" target="_blank" slot="activator">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn icon large href="https://codepen.io/johnjleider/pen/qxQWda" target="_blank" slot="activator">
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
              <span>Codepen</span>
            </v-tooltip>
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
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  }
};
</script>

<style>

</style>
