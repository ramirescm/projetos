<template>
  <div class="row">
    <div class="col s12">
      <h5>{{ lead.email }}</h5>
    </div>

    <div class="col s6">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Informações coletadas</span>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Campo</th>
                <th>Valor</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in lead.data">
                <td>{{ data.label }}</td>
                <td>{{ data.value }} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="col s6">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Listas ativas</span>
          <table>
            <thead>
              <tr>
                <th>Título</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="list in lead.lists">
                <td>{{ list.title }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Ações em campanhas</span>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ação</th>
                <th>Campanha</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in lead.actions">
                <td>{{ index + 1 }}</td>
                <td>
                  <span v-if="item.action[0].typeAction === 'open'">Abertura</span>
                  <span v-if="item.action[0].typeAction === 'click'">Click em link: <a :href="item.action[0].link" target="_blank">'{{ item.action[0].link }}</a></span>
                </td>
                <td><a :href="'#/emails/view/' + item.campaign._id">{{ item.campaign.title }}</a></td>
                <td>{{ item.action[0].date }}</td>
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
    lead: function () {
      return this.$store.state.lead.lead
    }
  },
  mounted: function () {
    this.$store.dispatch('getOneLead', this.$route.params.id)
  }
}
</script>
