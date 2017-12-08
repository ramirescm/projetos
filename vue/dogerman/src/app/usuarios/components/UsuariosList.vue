<template>
  <div class="container">  
    
  <h1 class="title">{{ title }}</h1>
  <div class="columns">
    <div class="column is-5">
      <div class="field has-addons">
        <div class="control">
           <input class="input is-expanded" type="text" placeholder="Procure pelo nome" v-model="busca">
        </div>
        <div class="control">
           <a class="button is-info" @click="buscarUsuario">Buscar</a>
        </div>
      </div>
    </div>
  </div>

  <div v-if="mensagem" class="column is-5">
    {{mensagem}}
  </div>

  <div class="control">
    <a href="#">
      <router-link class="button is-small" :to="{ name: 'usuario.incluir' }">Novo &nbsp<i class="fa fa-plus"></i></router-link>
    </a>
  </div>

  <div class="columns">
    <div class="column is-12">
      <table class="table is-narrow is-bordered">
        <thead>
          <th>Nome</th>
          <th>Cidade</th>
          <th>Telefone</th>
          <th>Mais</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario._id">
          <td>{{usuario.email}}</td>
          <td>{{usuario.email}}</td>
          <td>{{usuario.email}}</td>
          <td class="is-icon">
            <a href="#">
              <i class="fa fa-map-marker"></i>
            </a>
            <a href="#">
              <i class="fa fa-plus-circle"></i>
            </a>
          </td>
          
          <td class="is-icon">
             <a href="#">
               <router-link :to="{ name: 'usuario.editar', params: { id: usuario._id } }"><i class="fa fa-edit"></i></router-link>
            </a>
            <a href="#">
              <i class="fa fa-trash"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>
 </div>
</div>  
</template>
<script>

import UsuarioService from '../api';

export default {
  data () {
    return {
      mensagem: '',
      title: 'Usuários',
      busca: '',
      usuarios: []
    };
  },

  methods: {
    buscarUsuario () {},
    buscarTodos () {
      this.usuarioService
      .buscarTodos()
      .then(usuarios => {
        this.usuarios = usuarios;
      })
      .catch(err => {
        this.mensagem = err.message;
      });
    }
  },

  created () {
    this.usuarioService = new UsuarioService();
    this.buscarTodos();
  }
};
</script>

<style scoped lang='scss'>
.fixo {
  float: right;
  margin-right: 10px;
  margin-top: 0px;
  z-index: 1000;
}
</style>
