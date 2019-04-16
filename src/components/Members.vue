<template>
  <section class="l-members">
      <div class="container">
        <SectionHeader title="イカしたニクショクチーム" class="mb-5" backgroundColor="#ffcbcb" />
        <div class="l-members-row row" v-if="lists.length > 0">
          <div class="l-members-box-wrapper col-6 col-md-3 mb-5 mt-3" v-for="(list, index) in lists" :key="index">
            <div class="l-members-box rounded">
              <div class="l-members-box-icon text-center">
                <img class="rounded-circle" :src="list.avatar_static" :alt="name(list)">
              </div>
              <div class="display-name mb-2">
                {{name(list)}}
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
    },
    name(list) {
      return (list.display_name) ? list.display_name : list.username 
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$breakPointPc: 1120px;
$breakPointSp: 375px;
$sectionBackgroundColor: #FFCBCB;
$boxBackgroundColor: #FF8383;

.l-members {
  padding: 1rem 0;
  background-color: $sectionBackgroundColor;
  font-weight: bold;
  font-size: 20px;

  &-row {
    padding: 1rem 0;
  }

  &-box-wrapper {
    position: relative;
  }

  &-box {
    background-color: $boxBackgroundColor;
    padding: 3.5rem 1.5rem 1.5rem;

    &-icon {
      position: absolute;
      top: 0;
      left: 50%;
      transform:translate(-50%, -50%);

      margin-left: auto;
      margin-right: auto;
      
      $imgBorderWidth: 10px;
      img {
        border: $imgBorderWidth $boxBackgroundColor solid;
        background-color: $boxBackgroundColor; // 透過pngの画像とかあるので、bgcolor入れときます
        height: 100px + $imgBorderWidth;
        width: 100px + $imgBorderWidth;
      }
      @media screen and (max-width: $breakPointSp) {
        img {
          height: 80px + $imgBorderWidth;
          width: 80px + $imgBorderWidth;
        }
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
