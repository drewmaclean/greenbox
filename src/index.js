import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import SignupInfo from './components/SignupInfo.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)

const router = new VueRouter({
routes: [
  {path:'/',
    component: App
  },
  {path:'/Home',
    component: Home
  },
  {path:'/Login',
    component: Login
  },
  {path: '/signup',
    name: 'signup',
    component: Signup
  },
  {path: '/signupinfo/:user:pass',
    name: 'signupinfo',
    component: SignupInfo}
]})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
