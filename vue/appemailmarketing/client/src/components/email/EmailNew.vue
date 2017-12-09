<template>
  <div class="row">
      <div class="col s12">
          <h5>Nova campanha</h5>
      </div>
      <div class="col s12">
          <div class="card grey lighten-4">
              <div class="card-content">
                  <form action="" @submit.prevent="save()">
                      <div class="input-field">
                          <label for="campanha-title">Título</label>
                          <input type="text" id="campanha-title" v-model="data.title" />
                      </div>
                      <div class="input-field">
                          <label for="campanha-body">Conteúdo</label>
                          <textarea type="text" rows="10" id="campanha-body" v-model="data.body" class="materialize-textarea" />
                      </div>
                      <div class="input-field">
                          <label for="campanha-data-inicio">Data de início</label>
                          <input type="text" id="campanha-data-inicio" v-model="data.start" />
                      </div>
                      <div class="input-filter">
                          <strong>Disparar para a lista:</strong>
                          <select multiple class="browser-default" v-model="data.lists">
                              <option v-for="list in lists" :value="list._id">{{ list.title }}</option>
                          </select>
                      </div>
                      <input type="submit" class="btn" value="Salvar" />
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  computed: {
    lists: function () {
      return this.$store.state.list.lists
    }
  },
  data: function () {
    return {
      data: {
        lists: []
      }
    }
  },
  methods: {
    save: function () {
      this.$store.dispatch('insert', this.data).then(() => {
        this.$router.push('/email')
      })
    }
  },
  mounted () {
    this.$store.dispatch('getAllList')
  }
}
</script>
