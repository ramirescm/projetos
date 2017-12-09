<template>
  <div class="row">
      <div class="col s12">
          <h5>REMOÇÃO DE CAMPANHA - {{ email.title }}</h5>
      </div>
      <div class="col s12">
        <a :href="'#/email/view/' + email._id" class="btn blue">VER</a>
      </div>
      <div class="col s12">
          <div class="card grey lighten-4">
              <div class="card-content">
                  <span class="card-title">Confirmação</span>
                  <p>Deseja remover esta campanha?</p>
                  <a href="" class="btn" @click.prevent="remove">sim</a>
                  <a href="#/email" class="btn red">não</a>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  computed: {
    email: function () {
      return this.$store.state.email.email
    }
  },
  methods: {
    remove: function () {
      this.$store.dispatch('remove', this.email._id).then(() => {
        this.$router.push('/email')
      })
    }
  },
  mounted () {
    this.$store.dispatch('getOne', this.$route.params.id)
  }
}
</script>

