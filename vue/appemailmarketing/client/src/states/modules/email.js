let qs = require('qs')

export default {
  state: {
    emails: [],
    email: {},
    totals: []
  },
  mutations: {
    updateEmails (state, data) {
      state.emails = data
    },
    updateEmail (state, data) {
      state.email = data
    },
    updateTotals (state, data) {
      state.totals = data
    }
  },
  actions: {
    getAll: function (context) {
      return window.axios.get('/api/campaigns').then((response) => {
        context.commit('updateEmails', response.data.data)
        return response
      })
    },
    getOne: function (context, id) {
      return window.axios.get('/api/campaigns/' + id).then((response) => {
        context.commit('updateEmail', response.data.data)
        return response
      })
    },
    totals (context) {
      return window.axios.get('/api/campaigns/totals').then((response) => {
        context.commit('updateTotals', response.data)
        return response
      })
    },
    insert: function (context, data) {
      return window.axios.post('/api/campaigns', qs.stringify(data)).then((response) => {
        return response
      })
    },
    update: function (context, data) {
      return window.axios.put('/api/campaigns/' + data._id, qs.stringify(data)).then((response) => {
        return response
      })
    },
    remove: function (context, id) {
      return window.axios.delete('/api/campaigns/' + id).then((response) => {
        return response
      })
    }
  }
}
