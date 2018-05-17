<template>
  <v-app dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Greenbox</v-toolbar-title>
      <gb-header></gb-header>
    </v-toolbar>

    <v-content>
      <v-container>
        <p v-show="!cartItems.length">
          <i>Your cart is empty!</i>
          <router-link to="/Products">Products</router-link>
        </p>
        <p> {{cartItems}} </p>
        <v-layout  row wrap>
          <v-list v-for="product in productList" :key="product.flngProductKey" >
            <gb-product 
              :id="product.flngProductKey" 
              :url="product.fstrProductImageName" 
              :title="product.fstrTitle" 
              :description="product.fstrDescription" 
              :quantity="product.flngQuantity"
              :price="product.fcurPrice">
            </gb-product>
          </v-list>
        </v-layout>
      </v-container>
    </v-content>

    <p><button v-show="cartItems.length" class='button is-primary' @click='checkout'>Checkout</button></p>
    <gb-footer></gb-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import gbHeader from './Header.vue'
import gbFooter from './Footer.vue'
import gbProduct from './Product.vue'
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
  computed: {
    ...mapGetters([
      'cartItems'
    ]),
  },
  created() {
    this.productList = this.$store.state.cartItems
  },
  methods: {
    checkout(){
      alert('Pay us $')
    }
  }
}
</script>