<template>
    <div>
        <div id="usuarios-create-edit-view">

    <nav class="level">
      <div class="level-left">
        <h1 class="title is-2">Cadastro de usuários</h1>
      </div>
      <div class="level-right">
        <div class="level-item">
          <router-link :to="{ name: 'usuario.listar' }" class="button">Voltar para listagem &#8630;</router-link>
        </div>
      </div>
    </nav>
    
    <div class="columns">
      <div class="column is-6">
        <form class="form" @submit.prevent="salvarUsuario">
          
          <div class="field">
            <label for="email" class="label">Nome</label>
            <p class="control">
              <input type="text" class="input" name="email" id="email" v-model="usuario.email" v-validate data-vv-rules="required" data-vv-as="e-mail">
               <span class="erro" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            </p>
          </div>
          
          <div class="field">
            <label for="senha" class="label">Senha</label>
            <p class="control">
              <input type="password" class="input" name="senha" v-model="usuario.senha">
            </p>
          </div>
          
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Salvar</button>
            </div>
            <div class="control">
              <button class="button is-text"><router-link :to="{ name: 'usuario.listar' }">Cancelar</router-link></button>
            </div>
          </div>

        </form>
      </div>
    </div>

  </div>
    </div>
</template>
<script>
import UsuarioService from '../api';
import Usuario from '../Usuario';

export default {
  data () {
    return {
      usuario: new Usuario(),
      id: this.$route.params.id,
      mensagem: ''
    };
  },

  methods: {
    salvarUsuario () {
      this.$validator
          .validateAll()
          .then(sucess => {
            if (sucess) {
              this.usuarioService.salvar(this.usuario)
                .then((response) => {
                  console.log('emitir mensagem salvo com sucesso');
                })
                .catch((err) => {
                  this.mensagem = err;
                });
            } else {
              alert('Correct them errors!');
            }

            // alert('Correct them errors!');
          });
    },

    buscarPorId (id) {
      if (id) {
        this.usuarioService.buscarPorId(id)
        .then((response) => {
          this.usuario = response;
        })
        .catch((err) => {
          this.mensagem = err;
        });
      }
    }
  },

  created () {
    this.usuarioService = new UsuarioService();
    this.buscarPorId(this.id);
  }
};
</script>
<style>

</style>

