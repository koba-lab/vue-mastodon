<template>
  <section class="production-team">
    <SectionHeader title="Production Team!!!" backgroundColor="white" />
    <div class="production-team-row" v-if="memberList.length > 0">
      <div class="production-team-box-wrapper" v-for="member in members" :key="member.username">
        <div class="production-team-box rounded">
          <div class="production-team-box-icon text-center">
            <img class="rounded-circle" :src="member.avatar_static" />
          </div>
          <div class="position-name mb-2">{{member.position}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const _ = require("lodash");
import SectionHeader from '@/components/SectionHeader.vue'

const COMMENTS = require('@/assets/comments.json')

export default {
  name: 'ProductionTeam',
  components: {
    SectionHeader,
  },
  props: {
    memberList: Array,
  },
  computed: {
    members() {
      // memberListとpositionの設定されたCOMMENTSをマージして、positionでソート
      const members = []
      this.memberList.forEach(member => {
        members.push(Object.assign(member, COMMENTS.find(data => data.username === member.username)))
      })
      return _.orderBy(members, 'position', 'asc')
    },
  },
}
</script>

<style scoped lang="scss">
$breakPointPc: 1120px;
$breakPointSp: 375px;

.production-team {
  padding: 5rem 0;
  background-color: white;

  &-row {
    width: 100%;
    max-width: 1120px;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
    margin: 0 auto;
  }

  &-box-wrapper {
    margin-top: 5rem;
    position: relative;

    @media (min-width: $breakPointPc) {
      width: calc(100% / 5);
    }

    @media (min-width: $breakPointSp) and (max-width: $breakPointPc) {
      width: calc(100% / 3);
    }

    @media (max-width: $breakPointSp) {
      width: calc(100% / 2);
    }

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
