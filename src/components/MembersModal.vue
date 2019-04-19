<template>
  <transition name="modal">
    <div class="modal--mask">
      <div class="modal--wrapper">
        <div class="modal--container">
          <button class="btn modal-default-button" @click="$emit('close')">
            <i class="fas fa-times fa-lg"></i>
          </button>

          <div class="modal--body">
            <carousel
              ref="carousel"
              :per-page="1"
              :navigation-enabled="true"
              :pagination-enabled="false"
              :navigate-to="[defaultPage, false]"
              navigation-prev-label='<i class="fas fa-angle-left fa-2x"></i>'
              navigation-next-label='<i class="fas fa-angle-right fa-2x"></i>'
            >
              <slide v-for="user in users" :key="user.username">
                <div class="box-inner">
                  <div class="modal-item position-relative">
                    <div class=" user-image-wrapper">
                      <div class="thumbnail position-absolute">
                        <img class="rounded-circle" :src="user.avatar_static" :alt="$parent.name(user)">
                      </div>
                      <img class="img-fluid user-image" src="@/assets/user-images/sample.png" alt="">
                    </div>
                  </div>

                  <div class="l-col-info modal-item">
                    <aside class="heading mb-4">
                      <img src="@/assets/heading-top.png" class="img-fluid" />
                      <div class="py-2">
                        <h3 class="mb-2" v-html="textize.getNameHtml(user)"></h3>
                        <div>@{{user.username}}</div>
                      </div>
                      <img src="@/assets/heading-bottom.png" class="img-fluid" />
                    </aside>

                    <aside class="user-comment mb-4">
                      <h4 class="mb-2"><i class="fas fa-utensils mr-2"></i>好きなお肉</h4>
                      <div>{{comment(user).niku}}</div>
                      <div class="l-comments">
                        <h4 class="mb-2"><i class="fas fa-comment mr-2"></i>フェスの意気込み</h4>
                        <div class="comment">{{comment(user).comment}}</div>
                      </div>
                    </aside>

                  </div>
                </div>
              </slide>
            </carousel>
          </div>

        </div>
      </div>
    </div>
  </transition>

</template>

<script>
import textize from '@/helpers/textize'
import { Carousel, Slide } from 'vue-carousel';

const COMMENTS = require('@/assets/comments.json')

export default {
  name: 'MembersModal',
  components: {
    Carousel,
    Slide
  },
  props: {
    defaultPage: { // 初期表示時のページ番号
      type: Number,
      default: 1,
    },
    users: Array
  },
  computed: {
    textize: () => textize,
  },
  methods: {
    comment(user) {
      return COMMENTS.filter(data => data.username == user.username).shift()
    },
  },
}
</script>

<style lang="scss">
$breakPointPc: 1120px;
$breakPointSp: 375px;
$modalBackgroundColor: #FF8383;

.modal--mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255,203,203, .9);
  display: table;
  transition: opacity .3s ease;
}

.modal--wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal--container {
  width: 80vw;
  margin: 0px auto;
  padding: 30px;
  background-color: $modalBackgroundColor;
  border-radius: .5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  position: relative;
  max-height: 95%;
}

.modal-default-button {
  position: absolute;
  top: 0;
  right: 0;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.user-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  @media screen and (max-width: $breakPointSp) {
    width: 100%;
    height: 200px;
  }
}
img.user-image {
  width: auto;
  height: 100%;
  @media screen and (max-width: $breakPointSp) {
    width: 100%;
    height: 200px;
  }
  &.img-fluid {
  max-width: unset;
  }
}
.thumbnail {
  width: 80px;
  top: .5rem;
  left: 1.5rem;
  z-index: 1;
  @media screen and (max-width: $breakPointSp) {
    top: 0;
    left: 0;
  }
  img {
    $imgBorderWidth: 5px;
    border: $imgBorderWidth $modalBackgroundColor solid;
    background-color: $modalBackgroundColor; // 透過pngの画像とかあるので、bgcolor入れときます
    height: 80px + $imgBorderWidth;
    width: 80px + $imgBorderWidth;
  }
}
.l-col-info {
  padding-left: 1em;
  h3,
  h4 {
    font-weight: bold;
  }
  h4 {
    font-size: 1.2rem;
  }
  .emoji {
    margin: -.6ex 0 .2ex;
    width: 30px;
    height: 30px;
  }
}
.l-comments {
  max-height: 10vw;
  margin-top: 1em;
  white-space: pre-wrap;
  word-wrap: break-word;
  .comment {
    padding-bottom: 3em;
  }
}
.user-comment {
  text-align: left;
}

.VueCarousel-navigation-button {
  color: #4C3535 !important;
  &:focus {
    outline: 1px solid transparent !important;
  }
}
.box-inner {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  overflow-y: auto;
  height: 100%;
  .modal-item {
    width: 50%;
    flex-grow: 1;
  }
  @media screen and (max-width: $breakPointSp) {
    flex-wrap: wrap;
    .modal-item {
      width: 100%;
    }
  }
}
.VueCarousel-wrapper {
  .VueCarousel-slide {
    word-break: break-word;
  }
}
</style>
