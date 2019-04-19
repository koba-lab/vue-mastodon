<template>
  <section class="l-members">
    <div class="container">
      <SectionHeader title="イカしたニクショクチーム" class="mb-5" backgroundColor="#ffcbcb" />
      <div class="l-members-row row" v-if="users.length > 0">
        <div class="l-members-box-wrapper col-6 col-md-3 mb-5 mt-4" v-for="(user, index) in users" :key="index">
          <div class="l-members-box rounded">
            <div class="l-members-box-icon text-center">
              <img class="rounded-circle" :src="user.avatar_static" :alt="textize.getName(user)">
            </div>
            <div class="display-name mb-2" v-html="textize.getNameHtml(user)"></div>
            <div class="username text-truncate mb-3">
              <a :href="user.url" target="_blank">@{{user.username}}</a>
            </div>
            <div>
              <button class="btn btn-outline-dark btn-more" @click="show(index)">more</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <MembersModal v-if="viewpage != null" :default-page="viewpage" :users="users" @close="viewpage = null" />

  </section>
</template>

<script>
import textize from '@/helpers/textize'
import SectionHeader from '@/components/SectionHeader'
import MembersModal from '@/components/MembersModal'

export default {
  name: 'Members',
  components: {
    SectionHeader,
    MembersModal
  },
  props: {
    users: Array
  },
  data () {
    return {
      viewpage: null,
    }
  },
  computed: {
    textize: () => textize,
  },
  methods: {
    show(page) {
      this.viewpage = page
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$breakPointPc: 1120px;
$breakPointSp: 375px;
$sectionBackgroundColor: #FFCBCB;
$boxBackgroundColor: #FF8383;

.emoji {
  font-family: "object-fit:contain", inherit;
  vertical-align: middle;
  -o-object-fit: contain;
  object-fit: contain;
  margin: -.2ex .15em .2ex;
  width: 16px;
  height: 16px;  
}

.l-members {
  font-family: "Noto Sans CJK JP";
  color: #4C3535;

  padding: 3rem 0;
  background-color: $sectionBackgroundColor;
  font-weight: bold;

  &-row {
    padding: 1rem 0;
  }

  &-box-wrapper {
    position: relative;
  }
  @media (max-width: 575.98px) {
    &-box-wrapper:nth-child(odd){
      padding-right: 7.5px;
    }
    &-box-wrapper:nth-child(even){
      padding-left: 7.5px;
    }
  }


  &-box {
    background-color: $boxBackgroundColor;
    padding: 3.5rem 1.5rem 1.5rem;

    box-shadow:0px 7px 0px 0px #FF6262;

    &-icon {
      position: absolute;
      top: 0;
      left: 50%;
      transform:translate(-50%, -50%);

      $imgBorderWidth: 8px;
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
    font-size: 1.3rem;
    height: 90px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: normal;
    .emoji {
      margin: -.4ex 0 .2ex;
      width: 1.2rem;
      height: 1.2rem;  
    }
  }

  .username {
    font-size: 1rem;
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
      font-size: .8rem;
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
