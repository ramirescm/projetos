<template>
  <div>
    <button @click="exibe = !exibe">Exibe/Esconde</button>
    <p v-show="exibe">Você me vê?</p>
  </div>
</template>

<script>

export default {

  data() {
      return {
        exibe: false
      }
    }
}
</script>
<style>
</style>