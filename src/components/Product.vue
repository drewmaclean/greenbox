<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          :src="getImgUrl(url)"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">{{description}}</span><br>
            <span class="red--text">Available: {{quantity}}</span><br>
            <span class="blue--text">Price: ${{price}}</span><br>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn @click="addToCart({id, url, title, description, quantity, price})" flat color="orange">Add to cart</v-btn>
          <v-btn flat color="orange">Details</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'gb-product',
  props: ['id', 'url', 'title', 'description', 'quantity', 'price'],
  computed: {
  },
  methods: {
    // ...mapMutations([
    //   'addToCart'
    // ]),
    ...mapActions([
      'addToCart'
    ]),
    getImgUrl(img) {
      return 'https://s3.us-east-2.amazonaws.com/greenboxproductimages/' + img
    }
  }

//   computed: mapGetters([
//     'loggedIn'
//   ])
}
</script>

<style>

</style>
