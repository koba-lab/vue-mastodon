<template>
  <div class="home text-center">
    <div id="loader">
      <Loading />
    </div>

    <Header />

    <Fes />

    <Members :users="users" />

    <!-- 一旦非表示で -->
    <!-- <Gallery /> -->

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
import Loading from '@/components/Loading.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    FooterVisual,
    Fes,
    Members,
    Gallery, // eslint-disable-line
    ProductionTeam,
    Loading,
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
    window:onload = () => {
      // this.isLoading = false
      // とかで管理したかったけど、ここのthis = windowなのでデータにアクセスできない……
      const loader = document.getElementById('loader')
      loader.className = 'loaded'
    },
    async fetch() {
      let res = await this.$apiaxios.get(`/api/v1/lists/${process.env.VUE_APP_LISTID}/accounts`)
      this.users = _.orderBy(res.data, [data => data.username.toLowerCase()], 'asc')

      res = await this.$apiaxios.get(`/api/v1/lists/85/accounts`)
      this.productionMember = res.data
      // 肉bot自身はリストに追加できないので、固定で入れておきます 
      this.productionMember.push({"id":"41118","username":"nikubot2019","acct":"nikubot2019","display_name":"肉bot","locked":false,"bot":true,"created_at":"2019-04-11T11:39:12.401Z","note":"\u003cp\u003e肉派のbot\u003cbr /\u003e開発者 \u003cspan class=\"h-card\"\u003e\u003ca href=\"https://ika.queloud.net/@admin\" class=\"u-url mention\"\u003e@\u003cspan\u003eadmin\u003c/span\u003e\u003c/a\u003e\u003c/span\u003e\u003c/p\u003e","url":"https://ika.queloud.net/@nikubot2019","avatar":"https://ika.queloud.net/system/accounts/avatars/000/041/118/original/5de9101084e1de89.png?1554982983","avatar_static":"https://ika.queloud.net/system/accounts/avatars/000/041/118/original/5de9101084e1de89.png?1554982983","header":"https://ika.queloud.net/system/accounts/headers/000/041/118/original/bde0dd1d2bc370eb.jpeg?1554982947","header_static":"https://ika.queloud.net/system/accounts/headers/000/041/118/original/bde0dd1d2bc370eb.jpeg?1554982947","followers_count":26,"following_count":28,"statuses_count":2,"emojis":[],"fields":[]})
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

.loaded {
  display: none;
}
</style>
