<template>
  <div class="row">
      <div class="col s6">
          <div class="card">
              <div class="card-content">
                  <span class="card-title">Autenticação</span>
                  <form action="" @submit.prevent="logar()">
                      <div class="row">
                            <div class="input-field col s12">
                                <label for="username">Email</label>
                                <input id="username" type="text" v-model="login.username" class="validate">
                            </div>
                      </div>
                      <div class="row">
                            <div class="input-field col s12">
                                <label for="password">Senha</label>
                                <input id="password" type="password" v-model="login.password" class="validate">
                            </div>
                      </div>
                      <button class="btn" type="submit">
                          Acessar <i class="material-icons right">send</i>
                      </button>
                  </form>
              </div>
          </div>
      </div>
      <div class="col s6">
          <div class="card">
              <div class="card-content">
                  <span class="card-title">Registro</span>
                  <form action="" @submit.prevent="registrar()">
                      <div class="row">
                        <div class="input-field col s12">
                            <label for="name">Nome</label>
                            <input id="name" type="text" v-model="register.name" class="validate">
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12">
                            <label for="email">Email</label>
                            <input id="email" type="text" v-model="register.email" class="validate">
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12">
                            <label for="account_name">Nome da conta</label>
                            <input id="account_name" type="text" v-model="register.account_name" class="validate">
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12">
                            <label for="password_register">Senha</label>
                            <input id="password_register" type="password" v-model="register.password" class="validate">
                        </div>
                      </div>
                      <button class="btn" type="submit">
                          Registrar-se <i class="material-icons right">send</i>
                      </button>
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      login: { },
      register: { }
    }
  },
  methods: {
    logar () {
      this.$store.dispatch('authentication', this.login).then(() => {
        this.$router.push({ path: '/' })
      })
    },
    registrar () {
      this.$store.dispatch('register', this.register).then(() => {
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>
