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
      <gb-header></gb-header>
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
          <!-- <div v-for:"product in products" :key="product.flngProductKey" >
            <gb-product
              :id="1"
              url="1.jpg"
              title="candy"
              description="rock candy"
              quantity="100"
              price="5"
            ></gb-product> -->
          </div>
        </v-layout>
      </v-container>
    </v-content>
    <gb-footer></gb-footer>
  </v-app>
</template>

<script>
import gbHeader from './Header.vue'
import gbFooter from './Footer.vue'
import gbProduct from './Product.vue'
import axios from 'axios'
export default {
  data() {
    return {
      drawer: false,
      productList: []
    }
  },
  components: {
    gbHeader,
    gbFooter,
    gbProduct
  },
  props: {
    source: String
  },
  created() {
    axios
        .get(
          "https://w8ldp460na.execute-api.us-east-2.amazonaws.com/test/getproducts"
        )
        .then(response => {
          this.productList.splice(0, this.productList.length);
          for (let row of response.data) {
            this.productList.push(row);
          }
          //this.output.push(response.data);
          console.log("Got List");
        })
        .catch(err => {
          console.error(err);
        });
  }
  //,
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
