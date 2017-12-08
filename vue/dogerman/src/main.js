// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import PtBr from 'vee-validate/dist/locale/pt_BR';
import VeeValidate, { Validator } from 'vee-validate';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import { App } from './app';
import router from './router';
import store from './store';

Validator.localize('pt_BR', PtBr);

const config = {
  locale: 'pt_BR'
};

Vue.use(VeeValidate, config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
