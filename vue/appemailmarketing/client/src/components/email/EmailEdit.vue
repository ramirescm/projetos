<template>
  <div class="row">
      <div class="col s12">
          <h5>Editando campanha</h5>
      </div>
      <div class="col s12">
          <a :href="'#/email/view/' + email._id" class="btn">ver</a>
      </div>
      <div class="col s12">
          <div class="card grey lighten-4">
              <div class="card-content">
                  <form action="" @submit.prevent="save()">
                      <div class="input-field">
                          <label for="campanha-title">Título</label>
                          <input type="text" id="campanha-title" v-model="email.title" />
                      </div>
                      <div class="input-field">
                          <label for="campanha-body">Conteúdo</label>
                          <textarea type="text" rows="10" id="campanha-body" v-model="email.body" class="materialize-textarea" />
                      </div>
                      <div class="input-field">
                          <label for="campanha-data-inicio">Data de início</label>
                          <input type="text" id="campanha-data-inicio" v-model="email.start" />
                      </div>
                      <div class="input-filter">
                          <strong>Disparar para a lista:</strong>
                          <select multiple class="browser-default" v-model="email.lists">
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
    email: function () {
      let email = this.$store.state.email.email
      email.lists = email.lists || []
      return email
    },
    lists: function () {
      return this.$store.state.list.lists
    }
  },
  methods: {
    save: function () {
      this.$store.dispatch('update', this.email).then(() => {
        this.$router.push('/email/view/' + this.email._id)
      })
    }
  },
  mounted () {
    this.$store.dispatch('getOne', this.$route.params.id)
    this.$store.dispatch('getAllList')
  }
}
</script>

