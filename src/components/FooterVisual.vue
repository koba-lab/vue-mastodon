<template>
  <div class="footer-visual-container">
    <div class="footer-visual" />
  </div>
</template>

<script>
export default {
  name: 'FooterVisual',
}
</script>

<style lang="scss" scoped>
$breakPointPc: 1120px;
$breakPointSp: 375px;

.footer-visual-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 500px;
  height: 70vh;
  position: relative;
  background-color: #ff8383;
  background-image: url('../assets/oniku.png'); // とりあえず背景にしとく

  @media screen and (max-width: $breakPointPc) {
    background-size: 110px;
    max-height: 60vh;
  }
}

.footer-visual {
  width: 800px;
  max-width: 100%;
  height: auto;
  background: url('../assets/yakiniku-02.png');
  background-size: 100%;
  animation: sprite 7s steps(15) infinite;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: $breakPointSp) {
    bottom: -4px;
  }

  &::before {
    display: block;
    content: "";
    padding-top: 56.3%;
  }
}

@keyframes sprite {
  to {
    background-position: 0 calc(8445 / (9008 - 563) * 100%);
  }
}
</style>
