<template>
<div class="l-members-modal">
  <transition name="modal">
    <div class="modal-mask justify-content-center align-items-center">
      <div class="modal-wrapper">
        <div class="modal-container container py-4">
            <button class="btn btn-close" @click="$emit('close')"><i class="fas fa-times fa-lg"></i></button>
            <carousel 
              ref="carousel"
              :per-page="1" 
              :navigation-enabled="true" 
              :pagination-enabled="false"
              :navigate-to="[defaultPage, false]"
              navigation-prev-label='<i class="fas fa-angle-left"></i>'
              navigation-next-label='<i class="fas fa-angle-right"></i>'
            >
              <slide v-for="user in users" :key="user.username">
                <div class="row l-member-info">
                  <!-- 画像カラム -->
                  <div class="col-md-6 l-member-info-thumb mb-4">
                    <div class="thumbnail">
                      <img class="rounded-circle" :src="user.avatar_static" :alt="$parent.name(user)">
                    </div>
                    <div class="user-image text-center">
                      <img class="img-fluid w-100" src="@/assets/user-images/sample.png" alt="">
                    </div>
                  </div><!-- /画像カラム -->

                  <!-- 文章カラム -->
                  <div class="col-md-6 l-member-info-detail">
                    <div class="heading mb-5">
                      <img src="@/assets/heading-top.png" class="heading-top" />
                      <div class="py-4">
                        <h3 class="mb-2" v-html="$parent.nameHtml(user)"></h3>
                        <div>@{{user.username}}</div>
                      </div>
                      <img src="@/assets/heading-bottom.png" class="heading-bottom" />
                    </div>

                    <div class="content text-left">
                      <section class="mb-4">
                        <h4 class="mb-2"><i class="fas fa-utensils mr-4"></i>好きなお肉</h4>
                        <div>{{comment(user).niku}}</div>
                      </section>
                      <section>
                        <h4 class="mb-2"><i class="fas fa-comment mr-4"></i>フェスの意気込み</h4>
                        <div class="comment">{{comment(user).comment}}</div>
                      </section>
                    </div>
                  </div><!-- /文章カラム -->
                </div>
              </slide>
            </carousel>

          </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
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
  methods: {
    comment(user) {
      return COMMENTS.filter(data => data.username == user.username).shift()
    }
  },
}
</script>

<style lang="scss">
$modalBackgroundColor: #FF8383;
$breakPointPc: 1120px;
$breakPointSp: 375px;

.l-members-modal {
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,203,203, .9);

    display: flex;
    transition: opacity .3s ease;

    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .modal-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-close {
    position: absolute;
    right: 0;
    top: 0;
  }

  .modal-container {
    margin: 0px auto;
    padding: 20px 30px;
    background-color: $modalBackgroundColor;
    border-radius: .5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    position: relative;
    overflow: auto;

    .VueCarousel-wrapper {
      .VueCarousel-navigation-button:focus {
        outline: 1px solid transparent;
      }
      
      .thumbnail {
        position: absolute;
        top: .5rem;
        left: 1.5rem;
        z-index: 1;

        $imgBorderWidth: 8px;
        img {
          border: $imgBorderWidth $modalBackgroundColor solid;
          background-color: $modalBackgroundColor; // 透過pngの画像とかあるので、bgcolor入れときます
          height: 80px + $imgBorderWidth;
          width: 80px + $imgBorderWidth;
        }
      }
    }
  }
  @media screen and (max-width: $breakPointSp) {
    .modal-container {
      width: 95%;
    }
  }

  /*
  * transition用のスタイル
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

  .l-member-info-detail {
    overflow: hidden;
    overflow-y: auto;

    .heading {
      h3 {
        font-weight: bold;
      }
    }

    .emoji {
      margin: -.6ex 0 .2ex;
      width: 30px;
      height: 30px;  
    }

    .content {
      .comment {
        white-space: pre-wrap;
        word-wrap: break-word;
        max-height: 30vh; // heightをここで決めていいんだろうか…
      }

      h4 {
        font-weight: bold;
      }
    }
  }
}
</style>
