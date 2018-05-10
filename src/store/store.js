import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  isLoggedIn: false,
  username:'',
  password:'',
  customerKey:0,
  email:''
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  login(state) {
    state.isLoggedIn = true;
  },
  logout(state) {
    state.isLoggedIn = false;
  }
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
// Drew Note -- Maybe call the api gateway here and force wait or die action for login?
const actions = {
  login: ({ commit }) => commit("login"),
  logout: ({ commit }) => commit("logout"),
};

// getters are functions
const getters = {
  loggedIn: state => (state.isLoggedIn),
  username: state => (state.username),
  password: state => (state.password),
  customerKey: state => (state.customerKey),
  email: state => (state.email)
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
