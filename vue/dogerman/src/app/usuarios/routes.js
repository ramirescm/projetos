import * as components from './components';

export default [
  {
    path: '/usuarios',
    component: components.UsuariosList,
    name: 'usuario.listar'
  },
  {
    path: '/usuarios/novo',
    component: components.UsuariosForm,
    name: 'usuario.incluir'
  },
  {
    path: '/usuarios/editar/:id',
    component: components.UsuariosForm,
    name: 'usuario.editar'
  }
];
