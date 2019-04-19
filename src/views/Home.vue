<template>
  <div class="home text-center">
    <Header />

    <Fes />

    <Members :users="users" />

    <Gallery />

    <ProductionTeam :memberList="productionMember" />

    <FooterVisual />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
const _ = require("lodash");
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import FooterVisual from '@/components/FooterVisual.vue'
import Fes from '@/components/Fes.vue'
import Members from '@/components/Members'
import Gallery from '@/components/Gallery'
import ProductionTeam from '@/components/ProductionTeam.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    FooterVisual,
    Fes,
    Members,
    Gallery,
    ProductionTeam,
  },
  data() {
    return {
      users: [],
      productionMember: [],
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch() {
      let res = await this.$apiaxios.get(`/api/v1/lists/${process.env.VUE_APP_LISTID}/accounts`)
      this.users = _.orderBy(res.data, 'username', 'asc')

      res = await this.$apiaxios.get(`/api/v1/lists/85/accounts`)
      this.productionMember = _.orderBy(res.data, 'username', 'asc')
    }
  }
}
</script>

<style lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
