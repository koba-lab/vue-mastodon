<template>
  <div class="home text-center">
    <Header />

    <section class="l-members">
      <div class="container">
        <h3 class="heading">イカしたニクショクチーム</h3>
        <div class="row" v-if="lists.length > 0">
          <div class="l-members-box-wrapper col-6 col-md-3 mb-4" v-for="(list, index) in lists" :key="index">
            <div class="l-members-box p-4 rounded">
              <div class="l-members-box-icon text-center">
                <img class="rounded-circle" :src="list.avatar" :alt="list.display_name">
              </div>
              <div class="display-name mb-2">
                {{list.display_name}}
              </div>
              <div>
                <div class="username text-truncate mb-2">
                  <a :href="list.url">@{{list.username}}</a>
                </div>
                <button class="btn btn-outline-dark btn-more">more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
const _ = require("lodash");
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header,
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
.heading {
  font-family: 'Noto Sans CJK JP';
  text-align: center;
  padding: 5rem 0
}

.l-members {
  background-color: #FFCBCB;
  font-weight: bold;
  font-size: 20px;

  .l-members-box {
    background-color: #FF8383;    
    .l-members-box-icon {
      img {
        width: 100px;
        height: 100px;
      }
    }
  }

  .display-name {
    height: 90px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .username {
    a {
      color: #4C3535;
    }
  }

  .btn-more {
    position: relative;

    &.btn-outline-dark {
      border-radius: 5rem;
      padding: .25rem 2rem;

      border: 4px solid;
      font-size: 20px;
      font-weight: 900;

      color: #4C3535;
      border-color: #4C3535;
      &:hover,
      &:active {
        color: #FF8383 !important;
      }
    }
    &::after {
      position: absolute;
      right: 0;
      margin-top: .05rem;
      margin-right: .5rem;
      font-family: "Font Awesome 5 Free";
      content: "\f105";
    }
  }
}
</style>
