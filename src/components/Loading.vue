<template>
  <div class="loading">
    <img src="@/assets/oniku.png" />
  </div>
</template>

<script>
export default {
  name: 'Loading',
}
</script>

<style lang="scss" scoped>
.loading{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin 1s infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

