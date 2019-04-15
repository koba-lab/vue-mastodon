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
    <img src="@/assets/ikatako.png" class="key-visual" />
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
    max-width: 80%;
    animation: fadeIn 1s 1.5s both;
  }
}

@media screen and (max-width: 1120px) {
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

@media screen and (min-width: 1120px) {
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
