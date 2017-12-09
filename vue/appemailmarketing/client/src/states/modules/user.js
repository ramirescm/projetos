let qs = require('qs')

export default {
  state: {
    me: null,
    token: window.localStorage.getItem('token')
  },
  mutations: {
    updateToken (state, data) {
      state.token = data
    },
    updateUser  (state, data) {
      state.me = data
    }
  },
  actions: {
    authentication (context, user) {
      return window.axios.post('/oauth/token', qs.stringify(user)).then((response) => {
        context.commit('updateToken', response.data.token)
        window.localStorage.setItem('token', response.data.token)
        return response
      })
    },
    register (context, user) {
      return window.axios.post('/oauth/register', qs.stringify(user)).then((response) => {
        let authData = {
          username: user.email,
          password: user.password
        }
        return context.dispatch('authentication', authData)
      })
    },
    getCurrentUser (context) {
      return window.axios.get('/oauth/me').then((response) => {
        context.commit('updateUser', response.data)
        return response
      })
    }
  }
}
