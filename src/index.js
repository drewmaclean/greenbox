import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Products from './components/Products.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

import App from './components/App.vue'
import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import SignupInfo from './components/SignUpInfo.vue'
import Camera from './components/Camera.vue'

Vue.use(VueMaterial)
Vue.use(Vuetify)
Vue.use(VueRouter)

const router = new VueRouter({
routes: [
  {path:'/',
    name: 'default',
    component: Home
  },
  {path:'/Home',
    component: Home
  },
  {path:'/Login',
    component: Login
  },
  {path: '/signup/:showProf:showLic',
    name: 'signup',
    component: Signup
  },
  {path: '/signupinfo/:user:pass',
    name: 'signupinfo',
    component: SignupInfo
  },
  {path: '/Products',
    name: 'Products',
    component: Products
  },
  {path: '/Camera/:use:cstKey',
    name: 'camera',
    component: Camera
  }
]})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
