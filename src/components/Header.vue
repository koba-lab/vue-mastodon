<template>
  <header>
    <div class="ikatodon-icon">
      <a href="https://ika.queloud.net" target="_blank">
        <img src="@/assets/icon.png" />
      </a>
      <span class="party pl-2">イカトドンフェス 肉派</span>
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
  justify-content: space-between;
  align-items: center;

  .ikatodon-icon {
    align-self: baseline;

    img {
      height: 40px;

      @media screen and (min-width: $breakPointSp) and (max-width: $breakPointPc) {
        height: 60px;
      }

      @media screen and (min-width: $breakPointPc) {
        height: 100px;
      }
    }

    .party {
      font-size: 16px;
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

    &::before {
      display: block;
      content: "";
      padding-top: 56.3%;
    }
  }

  .message-wrapper {
    animation: fadeIn 1s 0.5s both;

    .message {
      font-size: 8vw;
      font-weight: bold;

      @media screen and (min-width: $breakPointPc) {
        font-size: 80px;
      }
    }

    .message-by {
      font-size: 5vw;
      font-weight: bold;

      @media screen and (min-width: $breakPointPc) {
        font-size: 30px;
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
