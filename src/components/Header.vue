<template>
  <header>
    <div class="ikatodon-icon">
      <a href="https://ika.queloud.net" target="_blank">
        <img src="@/assets/icon.png" />
      </a>
      <h1 class="party pl-2">肉派応援サイト - イカトドンフェス2019</h1>
    </div>
    <div class="message-wrapper pt-5 pb-1">
      <p class="message">あなたと焼く肉が何よりの<br />「ごちそう」</p>
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
    display: flex;
    align-items: center;
    align-self: baseline;

    @media screen and (max-width: $breakPointPc) {
      margin: 10px auto;
    }

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
      font-size: 1rem;
      font-weight: bold;
    }
  }

  .key-visual {
    width: 800px;
    max-width: 100%;
    height: auto;
    background: url('../assets/yakiniku.png');
    background-size: 100%;
    animation: fadeIn 1s 1.5s both, sprite 7s 2.5s steps(72) infinite;
    position: absolute;
    bottom: -10px;
    @media screen and (max-width: $breakPointSp) {
      bottom: -4px;
    }

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
