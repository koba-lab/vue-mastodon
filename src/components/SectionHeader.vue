<template>
  <div class="section-header">
    <span class="line-top-back">
      <div class="line-top-front" />
    </span>
    <h3 class="title">{{ title }}</h3>
    <span class="line-bottom-back">
      <div class="line-bottom-front" />
    </span>
  </div>
</template>

<script>
export default {	
  name: 'SectionHeader',	
  props: {	
    title: String	
  }	
}
</script>

<style lang="scss" scoped>
.section-header{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1120px) {
    .title {
      color: #4c3535;
      font-family: 'Noto Sans CJK JP';
      font-size: 28px;
      font-weight: bold;
      padding: 2rem 0;
      margin-block-end: 0;
    }
  }

  @media screen and (min-width: 1120px) {
    .title {
      color: #4c3535;
      font-family: 'Noto Sans CJK JP';
      font-size: 50px;
      font-weight: bold;
      padding: 2rem 0;
      margin-block-end: 0;
    }
  }
  
  .line-top-back {
    width: 85%;
    max-width: 400px;
    background: linear-gradient(35deg, #4c3535 18px, transparent 0), linear-gradient(325deg, #4c3535 18px, transparent 0);
    background-size: 50px 20px;
    animation: downUp 1s infinite;
  }
  
  .line-top-front {
    bottom: -5px;
    position: relative;
    width: 100%;
    height: 20px;
    background: linear-gradient(35deg, #ffcbcb 18px, transparent 0), linear-gradient(325deg, #ffcbcb 18px, transparent 0);
    background-size: 50px 20px;
  }
  
  .line-bottom-back {
    width: 85%;
    max-width: 400px;
    background: linear-gradient(145deg, #4c3535 18px, transparent 0), linear-gradient(215deg, #4c3535 18px, transparent 0);
    background-size: 50px 20px;
    animation: upDown 1s infinite;
  }
  
  .line-bottom-front {
    bottom: 5px;
    position: relative;
    width: 100%;
    height: 20px;
    background: linear-gradient(145deg, #ffcbcb 18px, transparent 0), linear-gradient(215deg, #ffcbcb 18px, transparent 0);
    background-size: 50px 20px;
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
