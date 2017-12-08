<template>
  <div>
        <input @input="nome = $event.target.value" />
        <p>{{ mensagem }}</p>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                nome : ''
            }
        },

        computed: {
            mensagem() {
                return `o nome ${this.nome}`;
            }
        }
    }
</script>

<style>

</style>
