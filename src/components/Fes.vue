<template>
  <div class="fes">
    <SectionHeader title="イカトドンフェス開催！" backgroundColor="#f7736e" />
    <div class="fes-time">
      <div>2019/4/20 20:00 - 23:00</div>
      <div>2019/4/21 20:00 - 23:00</div>
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
.fes {
  background-color: #ff8383;
  color: #4c3535;
  padding: 3rem 1rem;
  background-image: url('../assets/oniku.png'); // とりあえず背景にしとく

  @media screen and (max-width: 1120px) {
    background-size: 110px;
  }

  &-time {
    padding-top: 3rem;
    font-size: 1.4rem;
    font-weight: bold;
  }
}
</style>
