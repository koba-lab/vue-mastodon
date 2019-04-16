<template>
  <section class="l-members">
      <div class="container">
        <SectionHeader title="イカしたニクショクチーム" backgroundColor="#ffcbcb" />
        <div class="l-members-row row" v-if="lists.length > 0">
          <div class="l-members-box-wrapper col-6 col-md-3 mb-4" v-for="(list, index) in lists" :key="index">
            <div class="l-members-box p-4 rounded">
              <div class="l-members-box-icon text-center">
                <img class="rounded-circle" :src="list.avatar_static" :alt="list.display_name">
              </div>
              <div class="display-name mb-2">
                {{list.display_name}}
              </div>
              <div>
                <div class="username text-truncate mb-2">
                  <a :href="list.url" target="_blank">@{{list.username}}</a>
                </div>
                <button class="btn btn-outline-dark btn-more" @click="show()">more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  name: 'Members',
  components: {
    SectionHeader,
  },
  props: {
    lists: Array
  },
  methods: {
    show() {
      alert("ユーザーの詳細モーダルが表示される予定")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.l-members {
  padding: 1rem 0;
  background-color: #FFCBCB;
  font-weight: bold;
  font-size: 20px;

  &-row {
    padding: 1rem 0;
  }

  &-box {
    background-color: #FF8383;    
    &-icon {
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
