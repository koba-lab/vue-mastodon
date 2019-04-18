<template>
  <header>
    <div class="ikatodon-icon">
      <a href="https://ika.queloud.net" target="_blank">
        <img src="@/assets/icon.png" />
      </a>
      <span class="party pl-2">イカトドンフェス 肉派</span>
    </div>
    <div class="message pt-5 pb-1">
      <h1>あなたと焼く肉が何よりの<br />「ごちそう」</h1>
      <p class="pb-1">- しゃちょ</p>
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
$breakPoint: 1120px;

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
}

@media screen and (max-width: $breakPoint) {
  .ikatodon-icon {
    align-self: baseline;

    img {
      height: 40px;
    }

    .party {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .message {
    animation: fadeIn 1s 0.5s both;

    h1 {
      font-size: 30px;
      font-weight: bold;
    }

    p {
      font-size: 12px;
      font-weight: bold;
    }
  }
}

@media screen and (min-width: $breakPoint) {
  .ikatodon-icon {
    align-self: baseline;

    img {
      height: 100px;
    }

    .party {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .message {
    animation: fadeIn 1s 0.5s both;

    h1 {
      font-size: 80px;
      font-weight: bold;
    }

    p {
      font-size: 30px;
      font-weight: bold;
    }
  }
}

@keyframes sprite {
  to {
    background-position: 0 calc(40536 / (41099 - 563) * 100%);
  }
}
</style>
