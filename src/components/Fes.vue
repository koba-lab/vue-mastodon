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
  padding: 3rem 1rem;
  background-color: #f7736e;
  color: #4c3535;

  &-time {
    padding-top: 1rem;
    font-size: 1.4rem;
    font-weight: bold;
  }
}
</style>
