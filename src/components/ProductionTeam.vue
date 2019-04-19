<template>
  <section class="production-team">
    <SectionHeader title="Production Team!!!" backgroundColor="white" />
    <div v-if="memberList.length > 0" class="row">
      <div class="col-md-3 col-6" v-for="member in memberList" :key="member.username">
        <img class="img-fluid" :src="member.avatar_static" />
      </div>
    </div>
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

