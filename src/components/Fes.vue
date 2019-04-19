<template>
  <div class="fes">
    <SectionHeader title="イカトドンフェス開催！" backgroundColor="#f7736e" />
    <div class="fes-time">
      <div>2019/4/20 20:00 - 23:00</div>
      <div>2019/4/21 20:00 - 23:00</div>
    </div>
    <div class="fes-party">
      <img src="@/assets/party-base.png" class="fes-party-base" />
      <div class="fes-party-niku-wrapper">
        <img src="@/assets/party-niku-logo.png" class="fes-party-niku-logo" />
        <img src="@/assets/party-niku-icon.gif" class="fes-party-niku" />
      </div>
      <div class="fes-party-sushi-wrapper">
        <img src="@/assets/party-sushi-logo.png" class="fes-party-sushi-logo" />
        <img src="@/assets/party-sushi-icon.gif" class="fes-party-sushi" />
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  name: 'Fes',
  components: {
    SectionHeader,
  }
}
</script>

<style scoped lang="scss">
$breakPoint: 1120px;

.fes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ff8383;
  color: #4c3535;
  padding: 5rem 0;
  background-image: url('../assets/oniku.png'); // とりあえず背景にしとく

  @media screen and (max-width: $breakPoint) {
    background-size: 110px;
  }

  &-time {
    margin-top: 3rem;
    font-size: 1.4rem;
    font-weight: bold;
  }

  &-party {
    margin-top: 10rem;
    position: relative;
    width: 800px;
    max-width: 80%;

    @media screen and (max-width: $breakPoint) {
      margin-top: 3rem;
    }

    &-base {
      width: 100%;
    }

    &-niku-wrapper, &-sushi-wrapper {
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
    }

    &-niku-wrapper {
      left: 0;
      animation: fadeIn 1s 0.5s both; // TODO: スクロールで表示されてからアニメーションする
    }

    &-sushi-wrapper {
      right: 0;
      animation: fadeIn 1s 1.5s both;
    }

    &-niku, &-sushi {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 90%;
      transform-origin: bottom center;

      @media screen and (max-width: $breakPoint) {
        width: 100%;
      }
    }

    &-niku-logo, &-sushi-logo {
      position: absolute;
      width: 120%;
    }

    &-niku-logo {
      left: -50%;
      top: -30%;

      @media screen and (max-width: $breakPoint) {
        left: -35%;
        top: -30%;
      }
    }

    &-sushi-logo {
      right: -50%;
      top: -30%;

      @media screen and (max-width: $breakPoint) {
        width: 90%;
        right: -25%;
        top: -25%;
      }
    }
  }
}
</style>
