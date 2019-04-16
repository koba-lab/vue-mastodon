<template>
<div class="l-members-modal">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container container py-4">
          <button class="btn btn-close" @click="$emit('close')"><i class="fas fa-times fa-lg"></i></button>

          <div class="row l-member-info">
            <!-- 画像カラム -->
            <div class="col-md-6 l-member-info-thumb mb-4">
              <div class="thumbnail">
                <img class="rounded-circle" :src="defaultUser.avatar_static" :alt="$parent.name(defaultUser)">
              </div>
              <div class="user-image text-center">
                <img class="img-fluid" src="@/assets/user-images/sample.png" alt="">
              </div>
            </div><!-- /画像カラム -->

            <!-- 文章カラム -->
            <div class="col-md-6 l-member-info-detail">
              <div class="heading mb-4">
                <h3 class="mb-3" v-html="$parent.nameHtml(defaultUser)"></h3>
                <div>@{{defaultUser.username}}</div>
              </div>

              <div class="content text-left">
                <section class="mb-4">
                  <h4 class="mb-2"><i class="fas fa-utensils mr-4"></i>好きなお肉</h4>
                  <div>肩ロース、ぼんじり</div>
                </section>
                <section>
                  <h4 class="mb-2"><i class="fas fa-comment mr-4"></i>フェスの意気込み</h4>
                  <div>{{text}}</div>
                </section>
              </div>
            </div><!-- /文章カラム -->
          </div>

        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'MembersModal',
  props: {
    defaultUser: Object, // 初期表示時のユーザー情報
  },
  computed: {
    text() {
      const text = `すごい一体感を感じる。今までにない何か熱い一体感を。
風・・・なんだろう吹いてきてる確実に、着実に、俺たちのほうに。
中途半端はやめよう、とにかく最後までやってやろうじゃん。
ネットの画面の向こうには沢山の仲間がいる。決して一人じゃない。
信じよう。そしてともに戦おう。
寿司派の飯テロがTLに投下されるだろうけど、絶対に流されるなよ。すごい一体感を感じる。今までにない何か熱い一体感を。`
      return text
    }
  }
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
    max-height: 95%;
    width: 75%;
    max-width: 95%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    position: relative;
    overflow: auto;
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

  .l-member-info-thumb {
    position: relative;

    .thumbnail {
      position: absolute;
      top: -1rem;
      left: 0;

      $imgBorderWidth: 10px;
      img {
        border: $imgBorderWidth $modalBackgroundColor solid;
        background-color: $modalBackgroundColor; // 透過pngの画像とかあるので、bgcolor入れときます
        height: 80px + $imgBorderWidth;
        width: 80px + $imgBorderWidth;
      }
    }
  }

  .l-member-info-detail {
    overflow: hidden;
    overflow-y: auto;

    .emoji {
      margin: -.6ex 0 .2ex;
      width: 30px;
      height: 30px;  
    }

    .content {
      white-space: pre-wrap;
      word-wrap:break-word;

      h4 {
        font-weight: bold;
      }
    }
  }
}
</style>
