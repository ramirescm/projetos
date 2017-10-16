import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';

// importando o VeeValidate 
import VeeValidate, { Validator } from 'vee-validate';
import msg from './pt_BR';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/teste.css';

import './assets/js/teste.js';
import 'bootstrap/dist/js/bootstrap.js';

Vue.use(VueResource);
// se der ruim em producao verificar o endereco correto no webpack.config
Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

Vue.http.interceptors.push((req, next) => {

  // é possível colocar informações no header antes do envio da requisição
  //req.headers.set('Authorization', 'informação de segurança aqui');
  //console.log('Lidando com o request');

  next(res => {
    //console.log('Lidando com a resposta')
    // é possível acessar os dados da reposta e realizar transformações antes
    //console.log(res.body);
  });

});


Vue.use(VueRouter);

// em ecma script se a propriedade e variavel possuiem o mesmo nome pode ser omitida a atribuicao
const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

Validator.addLocale(msg);
Vue.use(VeeValidate, {
  locale: 'pt_BR'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
