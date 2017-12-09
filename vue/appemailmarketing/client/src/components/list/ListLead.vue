<template>
  <div class="row">
      <div class="col s12">
          <h5>Exibindo LEADS</h5>
      </div>
      <div class="col s12">
          <div class="card">
              <div class="card-content">
                  <table>
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>Email</th>
                              <th>Listas</th>
                              <th></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="(lead, index) in leads">
                              <td>{{ index + 1 }}</td>
                              <td>{{ lead.email }}</td>
                              <td>
                                  <div class="chip" v-for="chip in lead.lists">{{ chip.title }}</div>
                              </td>
                              <td>
                                  <a :href="'#/lead/' + lead._id" class="btn">ver</a>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  computed: {
    leads: function () {
      return this.$store.state.lead.leads
    }
  },
  mounted () {
    this.$store.dispatch('getAllLeads', this.$route.params.id)
  }
}
</script>
