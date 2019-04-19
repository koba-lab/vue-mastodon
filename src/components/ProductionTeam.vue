<template>
  <section class="production-team">
    <SectionHeader title="Production Team!!!" backgroundColor="white" />
    <div class="production-team-row row mx-md-5 px-md-5" v-if="memberList.length > 0">
      <div class="production-team-box-wrapper col-md-3 col-6 mb-5 mt-4" v-for="member in memberList" :key="member.username">
        <div class="production-team-box rounded">
          <div class="production-team-box-icon text-center">
            <img class="rounded-circle" :src="member.avatar_static" />
          </div>
          <div class="position-name mb-2">{{getPosition(member)}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'

const COMMENTS = require('@/assets/comments.json')

export default {
  name: 'ProductionTeam',
  components: {
    SectionHeader,
  },
  props: {
    memberList: [],
  },
  methods: {
    getPosition(member) {
      const user = COMMENTS.find(data => data.username === member.username)
      return user.position
    }
  }
}
</script>

<style scoped lang="scss">
$breakPointPc: 1120px;
$breakPointSp: 375px;

.production-team {
  padding: 3rem 1rem;
  background-color: white;

  &-row {
    padding: 1rem 0;
  }

  &-box-wrapper {
    position: relative;
  }

  @media (max-width: 575.98px) {
    &-box-wrapper:nth-child(odd){
      padding-right: 7.5px;
    }
    &-box-wrapper:nth-child(even){
      padding-left: 7.5px;
    }
  }

  &-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-icon {
      $imgBorderWidth: 8px;
      img {
        height: 100px + $imgBorderWidth;
        width: 100px + $imgBorderWidth;
      }
      @media screen and (max-width: $breakPointSp) {
        img {
          height: 80px + $imgBorderWidth;
          width: 80px + $imgBorderWidth;
        }
      }
    }
  }

  .position-name {
    margin-top: 20px;
    font-size: 1.3rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: normal;
    color: '#4C3535';
    font-weight: bold;
  }
}
</style>

