<template>
  <v-app id="inspire" dark>
    <gb-header></gb-header>
    <v-container fluid fill-height>
        <v-layout align-center justify-center v-if="!addPhoto">
          <v-flex lg10 sm8 md4>
            <v-card class="elevation-12" v-bind:style="'padding: 10px;'">
                <h2>Sign Up</h2>
                <v-text-field prepend-icon="person" name="Username" label="Username" v-model="credentials.Username"></v-text-field>
                <v-text-field prepend-icon="lock" name="Password" label="Password" type="password" v-model="credentials.password"></v-text-field>
                <v-text-field prepend-icon="mail" name="Email" label="Email"></v-text-field>
                <v-layout row wrap align-left justify-left>
                    <v-flex>
                      <button class="btn btn-primary" v-bind:style="'padding: 10px;'" @click="addLicense()">Add License Photo</button>
                      <v-badge left color="green" v-model="show" overlay>
                        <v-icon slot="badge" dark small>done</v-icon>
                      </v-badge>
                    </v-flex>
                    <v-flex>
                      <p v-if="show">Success!</p>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex class = "text-xl-left">
                      <button class="btn btn-primary" v-bind:style="'padding: 10px;'" @click="addProfile()">Add Profile Photo</button>
                      <v-badge left color="green" v-model="show" right overlay>
                        <v-icon slot="badge" dark small>done</v-icon>
                      </v-badge>
                    </v-flex>
                    <v-flex>
                      <p v-if="show">Success!</p>
                    </v-flex>
                </v-layout>
                <v-flex>
                   <button class="btn btn-primary" @click="signUp()">Sign Up</button>
                </v-flex>
                <v-card-text v-if="saved"> done!</v-card-text>
                <p>{{customerKey}}</p>
                <router-view></router-view>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center v-if="addPhoto">
          <v-flex lg10 sm8 md4>
            <v-flex>
              <video ref="video" id="video" width="640" height="480" autoplay></video>
            </v-flex>
            <v-flex>
              <button id="snap" v-on:click="capture()">Snap Photo</button>
            </v-flex>
            <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
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
  components: {
    gbHeader,
    gbFooter
  },
  data() {
    return {
      credentials: {
        Username: '',
        password: ''
      },
      error: '',
      show: false,
      saved: false,
      output: null,
      customerKey: 0,
      video: {},
      canvas: {},
      captures: [],
      addPhoto: false
    }
  },
  computed: mapGetters([
    'loggedIn'
  ]),
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
      this.addPhoto = !this.addPhoto
    },
    signUp(){
      axios
        .get(
          "https://w8ldp460na.execute-api.us-east-2.amazonaws.com/test/createcustomer",
          {
            params: {
              'userName': this.credentials.Username,
              'password': this.credentials.password
            }
          }
        )
        .then(response => {
          this.output = response.data
          console.log(response)
          this.customerKey = this.output['customerKey']
        })
    },
    capture() {
        this.canvas = this.$refs.canvas
        var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480)
        this.captures.push(canvas.toDataURL("image/png"))
    }
  }
}
</script>