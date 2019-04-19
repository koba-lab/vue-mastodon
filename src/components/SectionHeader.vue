<template>
  <div class="section-header">
    <img src="@/assets/heading-top.png" class="heading-top" />
    <h2 class="title">{{ title }}</h2>
    <img src="@/assets/heading-bottom.png" class="heading-bottom" />
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: String,
  },
}
</script>

<style lang="scss" scoped>
.section-header{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .heading-top {
    animation: downUp 1s infinite;
  }

  .heading-bottom {
    animation: upDown 1s infinite;
  }

  @media screen and (max-width: 1120px) {
    .title {
      color: #4c3535;
      font-size: 28px;
      font-weight: bold;
      padding: 2rem 0;
      margin-block-end: 0;
    }

    .heading-top, .heading-bottom {
      width: 200px;
    }
  }

  @media screen and (min-width: 1120px) {
    .title {
      color: #4c3535;
      font-size: 50px;
      font-weight: bold;
      padding: 2rem 0;
      margin-block-end: 0;
    }

    .heading-top, .heading-bottom {
      width: 400px;
    }
  }

}

@keyframes downUp {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}

@keyframes upDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
