<template>
  <v-app id="inspire" dark>
    <gb-header></gb-header>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex lg8 sm8 md4>
            <v-card class="elevation-12" v-bind:style="'padding: 10px;'">
                <h2>Sign Up</h2>
                <v-alert v-if="alert" v-bind:message="alert"></v-alert>
                <v-text-field prepend-icon="person" name="Username" label="Username" v-model="credentials.username"></v-text-field>
                <v-text-field prepend-icon="lock" name="Password" label="Password" type="password" v-model="credentials.password"></v-text-field>
                <v-text-field prepend-icon="mail" name="Email" label="Email" v-model="email"></v-text-field>
                <v-layout row wrap>
                    <v-flex class="text-sm-center">
                      <button class="btn btn-primary" v-bind:style="'padding: 10px;'" @click="addLicense()">Add License Photo</button>
                      <v-badge left color="green" v-model="showLic" overlay>
                        <v-icon slot="badge" dark small>done</v-icon>
                      </v-badge>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex class="text-sm-center">
                      <button class="btn btn-primary" v-bind:style="'padding: 10px;'" @click="addProfile()">Add Profile Photo</button>
                      <v-badge left color="green" v-model="showProf" overlay>
                        <v-icon slot="badge" dark small>done</v-icon>
                      </v-badge>
                    </v-flex>
                </v-layout>
                <v-flex>
                   <button class="btn btn-primary" @click="signUp()">Sign Up</button>
                </v-flex>
                <v-card-text v-if="saved"> done!</v-card-text>
                <router-view></router-view>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
    <gb-footer></gb-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import gbHeader from './Header.vue'
import gbFooter from './Footer.vue'

export default {
  name: 'signup',
  computed: mapGetters([
    'username',
    'password',
    'customerKey',
    'email'
  ]),
  created(){
    this.showProf = this.$route.params.showProf
    this.showLic = this.$route.params.showLic},

  components: {
    gbHeader,
    gbFooter
    },

  data() {
    return {
      customerKey: this.$store.state.customerKey,
      credentials: {
        username: this.$store.state.username,
        password: this.$store.state.password
      },
      email: this.$store.state.email,
      error: '',
      showLic: false,
      showProf: false,
      saved: false,
      output: null,
      alert: ''
    }
  },
  mounted() {
    this.video = this.$refs.video
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.src = window.URL.createObjectURL(stream)
            this.video.play()
        })
      }
    },
  methods: {
    addLicense() {
      this.validateUser()
      this.$router.push({name: 'camera', params:{use:'lic'}})
    },
    addProfile() {
      this.validateUser()
      this.$router.push({name: 'camera', params:{use:'prof'}})
    },
    validateUser(){
      console.log(this.customerKey)
      console.log(this.$store.state.customerKey)
      if ((this.credentials.username != '') && (this.credentials.password != '') && (this.customerKey === 0)) {
      axios
        .get(
          "https://w8ldp460na.execute-api.us-east-2.amazonaws.com/test/createcustomer",
          {
            params: {
              'userName': this.credentials.username,
              'password': this.credentials.password
            }
          }
        )
        .then(response => {
          this.output = response.data
          
          this.$store.state.customerKey = this.output['customerKey']
          this.customerKey = this.$store.state.customerKey
          this.$store.state.username = this.credentials.username
          this.$store.state.password = this.credentials.password
          this.$store.state.email = this.email
        })
      }
      else {this.alert = 'Please enter a username and password'}
    },
  }
}
</script>