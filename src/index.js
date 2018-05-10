import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Products from './components/Products.vue'
import Test from './components/Test.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store/store'

<<<<<<< HEAD
import App from './components/App.vue'
import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import SignupInfo from './components/SignUpInfo.vue'
import Camera from './components/Camera.vue'

Vue.use(VueMaterial)
=======
>>>>>>> 9b25399ff4e05cc8a32487f54b95bc665b70d3ef
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
<<<<<<< HEAD
  {path: '/Camera/:use:cstKey',
    name: 'camera',
    component: Camera
=======
  {path: '/Test',
    name: 'Test',
    component: Test
>>>>>>> 9b25399ff4e05cc8a32487f54b95bc665b70d3ef
  }
]})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
