<template>
  <v-app id="inspire" dark>
    <v-toolbar-title prominent = "true">SpaceCase</v-toolbar-title>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex lg8 sm8 md4>
            <v-card class="elevation-12" v-bind:style="'padding: 10px;'">
                <h2>Sign Up</h2>
                <v-alert v-if="alert" v-bind:message="alert"></v-alert>
                <v-text-field prepend-icon="person" name="Username" label="Username" v-model="credentials.Username"></v-text-field>
                <v-text-field prepend-icon="lock" name="Password" label="Password" type="password" v-model="credentials.password"></v-text-field>
                <v-text-field prepend-icon="mail" name="Email" label="Email" v-on:click="validateUser"></v-text-field>
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
                      <v-badge left color="green" v-model="showProf" right overlay>
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
    <v-footer app fixed>
      <span>&copy; 2017 Greenbox</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'signup',
  created(){
    this.showProf = this.$route.params.showProf
    this.showLic = this.$route.params.showLic

  },
  data() {
    return {
      credentials: {
        Username: '',
        password: ''
      },
      error: '',
      showLic: false,
      showProf: false,
      saved: false,
      output: null,
      customerKey: 0,
      alert: ''
    }
  },
  methods: {
    addLicense() {

      this.validateUser()

      this.$router.push({name: 'camera', params:{use:'lic', cstKey:this.customerKey}})
    },
    validateUser(){
      console.log(this.customerKey)
      if ((this.credentials.Username != '') && (this.credentials.password != '') && (this.customerKey === 0)) {
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
      }
      else {this.alert = 'Please enter a username and password'}
    },
  }
}
</script>