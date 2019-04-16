<template>
  <div class="home text-center">
    <Header />

    <Fes />

    <Members :lists="lists" />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
const _ = require("lodash");
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Fes from '@/components/Fes.vue'
import Members from '@/components/Members.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    Fes,
    Members,
  },
  data() {
    return {
      lists: [],
    }
  },
  created () {
    this.fetchLists()
  },
  methods: {
    async fetchLists() {
      const res = await this.$apiaxios.get(`/api/v1/lists/${process.env.VUE_APP_LISTID}/accounts`)
      this.lists = _.orderBy(res.data, 'username', 'asc')
    }
  }
}
</script>

<style lang="scss">
</style>
