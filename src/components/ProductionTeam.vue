<template>
  <section class="production-team">
    <SectionHeader title="Production Team!!!" backgroundColor="white" />
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  name: 'ProductionTeam',
  components: {
    SectionHeader,
  },
  props: {
    memberList: [],
  },
}
</script>

<style scoped lang="scss">
.production-team {
  padding: 3rem 1rem;
  background-color: white;
}
</style>

