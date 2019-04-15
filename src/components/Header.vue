<template>
  <header>
    <div class="ikatodon-icon">
      <a href="https://ika.queloud.net" target="_blank">
        <img src="@/assets/icon.png" />
      </a>
      <span class="party">イカトドンフェス 肉派</span>
    </div>
    <div class="message">
      <h1>あなたと焼く肉が何よりの<br />「ごちそう」</h1>
      <p>- しゃちょ</p>
    </div>
    <img src="@/assets/ikatako.png" class="key-visual" />
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  height: 1080px;
  background: url('../assets/niku.png') center no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 80px;
    font-weight: bold;
  }

  p {
    font-size: 30px;
    font-weight: bold;
  }

  .ikatodon-icon {
    align-self: baseline;

    img {
      height: 100px;
    }

    .party {
      padding-left: 20px;
      font-size: 20px;
      font-weight: bold;
    }
  }

  .key-visual {
    height: 476px;
  }
}
</style>
