<template>
  <header>
    <div class="ikatodon-icon">
      <a href="https://ika.queloud.net" target="_blank">
        <img src="@/assets/icon.png" />
      </a>
      <span class="party pl-2">肉派応援サイト - イカトドンフェス2019</span>
    </div>
    <div class="message-wrapper pt-5 pb-1">
      <h1 class="message">あなたと焼く肉が何よりの<br />「ごちそう」</h1>
      <p class="message-by pb-1">- しゃちょ</p>
    </div>
    <div class="key-visual" />
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$breakPointPc: 1120px;
$breakPointSp: 375px;

header {
  background-image: url('../assets/niku.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;

  .ikatodon-icon {
    align-self: baseline;

    img {
      height: 30px;

      @media screen and (min-width: $breakPointSp) and (max-width: $breakPointPc) {
        height: 40px;
      }

      @media screen and (min-width: $breakPointPc) {
        height: 50px;
      }
    }

    .party {
      font-size: 1.6rem;
      font-weight: bold;

      @media screen and (min-width: $breakPointSp) and (max-width: $breakPointPc) {
        font-size: 18px;
      }

      @media screen and (min-width: $breakPointPc) {
        font-size: 20px;
      }
    }
  }

  .key-visual {
    width: 1000px;
    max-width: 100%;
    height: auto;
    background: url('../assets/yakiniku.png');
    background-size: 100%;
    animation: fadeIn 1s 1.5s both, sprite 7s 2.5s steps(72) infinite;
    position: absolute;
    bottom: -10px;

    &::before {
      display: block;
      content: "";
      padding-top: 56.3%;
    }
  }

  .message-wrapper {
    animation: fadeIn 1s 0.5s both;

    .message {
      font-size: 3rem;
      font-weight: bold;

      @media screen and (min-width: $breakPointPc) {
        font-size: 4rem;
      }
    }

    .message-by {
      font-size: 2rem;
      font-weight: bold;

      @media screen and (min-width: $breakPointPc) {
        font-size: 3rem;
      }
    }
  }
}

@keyframes sprite {
  to {
    background-position: 0 calc(40536 / (41099 - 563) * 100%);
  }
}
</style>
