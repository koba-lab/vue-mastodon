<template>
  <div class="home container text-center">
    <HelloWorld msg="イカトドン肉派サイトのために色々するサイト"/>

    <div class="mb-5">
      <button class="btn btn-primary" @click="fetchLists">リストを取得する</button>
    </div>

    <section>
      <h3>肉派メンバー（抜粋）</h3>
      <div class="row">
        <div class="col-4 col-md-2" v-for="(list, index) in lists" :key="index">
          <a :href="list.url">
            <img class="img-fluid rounded-circle w-100" :src="list.avatar" :alt="list.display_name">
            <span v-html="list.display_name"></span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'

// ちゃんとやるならthis.$axiosとかで使えるようにしなきゃね〜
const apiaxios = axios.create({
  baseURL: 'https://ika.queloud.net',
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
  }
})

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      lists: [],
    }
  },
  methods: {
    async fetchLists() {
      const res = await apiaxios.get(`/api/v1/lists/${process.env.VUE_APP_LISTID}/accounts`)
      this.lists = res.data
    }
  }
}
</script>
