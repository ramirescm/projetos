import Cadastro from './components/cadastro/Cadastro.vue';
// carregando por demanda apenas quando o componente for requisitado
//const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');

import Home from './components/home/Home.vue';

export const routes = [

    { path: '/lista', name: 'home', component: Home, titulo: 'Home', menu: true },
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
    { path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false },
    { path: '*', component: Home, menu: false },

];