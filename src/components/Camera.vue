
<template>
  <v-app id="inspire" dark>
    <v-toolbar-title prominent = "true">SpaceCase</v-toolbar-title>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex lg10 sm8 md4>
            <v-card class="elevation-12" v-bind:style="'padding: 20px;'">
              <v-flex>
                <video ref="video" id="video" autoplay></video>
              </v-flex>
              <v-flex>
                <button class="btn btn-primary" v-bind:style="'padding: 10px;'" id="snap" v-on:click="capture()">Snap Photo</button>
              </v-flex>
              <v-flex>
                <!-- <input id = 'img' type="file" accept="image/*">!-->
               <canvas ref ="canvas" id="canvas" width="160" height="120"></canvas>
              </v-flex>
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
var AWS = require('aws-sdk')
var albumBucketName = 'imgqueue';
var bucketRegion = 'us-east-2';
var IdentityPoolId = 'us-east-2:9f922768-b98e-4137-a8d7-71218107b19b';

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});
 
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});

export default {
    name: 'camera',
    created(){
      this.use = this.$route.params.use
      this.customerKey = this.$route.params.cstKey
    },
    data() {
        return {
        video: {},
        canvas: {},
        captures: [],
        showProf: false,
        showLic: false,
        use: '',
        customerKey: 0
        }
    },
    mounted() {this.video = this.$refs.video
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.src = window.URL.createObjectURL(stream)
                this.video.play();
            })
        }
    },
    methods: {
        capture() {
                this.canvas = this.$refs.canvas
                var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 160, 120)
                this.captures.push(canvas.toDataURL("image/jpg"))

                var files = this.captures
                var file = files[0]
                var photoKey = this.use + '_' + this.customerKey + '.jpg'

                s3.upload({
                    Key: photoKey,
                    Body: file,
                    ACL: 'public-read',
                    ContentType: 'image/jpg'
                }, (function(err, data){ if (err) {
                    return console.log(err.message)
                  }
                console.log('Successfully uploaded photo.')
                if (this.use = 'lic') {this.showLic= true}
                else this.showProf = true
                this.$router.push({name: 'signup', params: {showProf:this.showProf, showLic:this.showLic}})}).bind(this))   
                navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
                  var track = stream.getTracks()[0];  // if only one media track
                  track.stop();
                  })
            }
    }
}
</script>