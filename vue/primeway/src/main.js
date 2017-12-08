import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

Vue.use(VueMaterial);

// Vue.material.theme.registerAll({
//   default: {
//     primary: 'light-blue',
//     accent: 'pink'
//   }
// });


new Vue({
  el: '#app',
  render: h => h(App)
})
