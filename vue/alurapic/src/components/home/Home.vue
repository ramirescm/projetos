<template>
  <div>
    <img src="/static/teste.jpg" />>
    <h1 class="titulo">{{ titulo }}</h1>

    <!-- novo elemento para exibir mensagens para o usuário -->
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>

    <!-- v-bind  v-bind:src={{ foto.url }} interpolação dentro de atributos usado como : :src=foto.url pois sintaxe é mais enxuta -->
    <!-- $event evento especial do vue que sabe tudo sobre o evento que foi disparado -->
    <!-- computed properties .fotosComFiltro.. sao metodos que pode ser escrito uma logica para isolar e acessar como uma propriedade -->

    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Busque pelo titulo da foto..." />
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto._id">

        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform:scale.animate="1.2" :url="foto.url" :titulo="foto.titulo" />
          <!-- 
                      <imagem-responsiva v-meu-transform.animate.reverse="1.2" :url="foto.url" :titulo="foto.titulo" />
                      <imagem-responsiva v-meu-transform:rotate.animate.reverse="1.2" :url="foto.url" :titulo="foto.titulo" />
                  -->
          <router-link :to="{ name : 'altera', params: { id : foto._id }}">
            <meu-botao tipo="button" rotulo="ALTERAR" />
          </router-link>

          <meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado="remover(foto)" :valor="foto.titulo" :confirmacao="true" estilo="perigo" />
        </meu-painel>

      </li>
    </ul>

    <hello></hello>
    <vocemeve></vocemeve>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Hello from '../Hello.vue';
import VoceMeVe from '../VoceMeVe.vue';
import Botao from '../shared/botao/Botao.vue';

// importou  diretiva. Tem que adicionar na propriedade directives logo abaixo!
import transform from './../../directives/Transform';
import FotoService from '../../domain/foto/FotoService';

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao,
    'hello': Hello,
    'vocemeve': VoceMeVe
  },

  directives: {
    'meu-transform': transform
  },

  data() {

    return {
      titulo: 'Heroes',
      fotos: [],
      filtro: '',
      mensagem: ''
    }

  },

  computed: {

    fotosComFiltro() {
      if (this.filtro) {
        // filtra a lista com
        let exp = new RegExp(this.filtro.trim(), 'i'); // i - de insensitive
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }

      return this.fotos;
    }
  },

  methods: {
    remover(foto) {

      // this.resource.delete({ id: foto._id})
      // this.$http.delete(`v1/fotos/${foto._id}`)
      this.service.excluir(foto._id)
        .then(
        () => {
          let indice = this.fotos.indexOf(foto); // acha a posição da foto na lista
          this.fotos.splice(indice, 1); // a instrução altera o array
          this.mensagem = 'Foto removida com sucesso'
        },
        err => this.mensagem = err.message
        );

    }
  },

  created() {
    this.service = new FotoService(this.$resource);
    this.service
      .listar()
      .then(fotos => this.fotos = fotos, err => this.mensagem = err.message);
  }

}
</script>

<style>
.titulo {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
