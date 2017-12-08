<template>
  <div class="corpo">

    <menu-principal :rotas="routes" />

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from './routes.js';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'menu-principal': Menu
  },

  data() {
    return {
      routes : routes.filter(route => route.menu)
    }
  }

}

</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.pagina-enter,
.pagina-leave-active {
  opacity: 0
}

.pagina-enter-active,
.pagina-leave-active {
  transition: opacity .4s
}
</style>
