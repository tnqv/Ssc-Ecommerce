import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import Vuetify from 'vuetify';
import Vuex from 'vuex';

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(Vuex);

export const mutations = {
  showModal(state, componentName) {
    state.modalVisible = true;
    state.selectedStep = 1;
    state.modalComponent = componentName;
    console.log(state.selectedStep);
  },
  hideModal(state) {
    console.log("hide modal" + state);
    state.modalVisible = false;
  },
  nextStep(state,step){
    state.selectedStep = step;
    console.log("next step" + state.selectedStep);
  },
  updateStep (state, step) {
    state.selectedStep = step;
  }
};

export const state = {
  modalVisible: false,
  modalComponent: null,
};

export const getters = {
    getStep: state => {
        return state.selectedStep;
    }
};

export const store = new Vuex.Store({
    mutations,
    state,
    getters,
});

const router = new VueRouter({
    routes
});

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
