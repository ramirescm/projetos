export default {
  state: {
    leads: [],
    lead: {}
  },
  mutations: {
    updateLeads (state, data) {
      state.leads = data
    },
    updateLead (state, data) {
      state.lead = data
    }
  },
  actions: {
    getAllLeads: function (context, id) {
      return window.axios.get('/api/leads-by-list/' + id).then((response) => {
        context.commit('updateLeads', response.data.data)
        return response
      })
    },
    getOneLead: function (context, id) {
      return window.axios.get('/api/leads/' + id).then((response) => {
        context.commit('updateLead', response.data.data)
        return response
      })
    }
  }
}
