<template>
  <div class="gallery">
    <SectionHeader title="Gallery" />
    <div class="gallery-container">
    </div>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'

const SLIDE_COUNT = 3;

export default {
  name: 'Gallery',
  components: {
    SectionHeader,
  },
  data() {
    return {
      images: [],
    }
  },
  mounted() {
    this.setImages()
  },
  methods: {
    setImages() {
      for (let i = 1; i < SLIDE_COUNT + 1; i++) {
        this.images.push({
          id: i,
          src: require(`@/assets/gallery/gallery-0${i}.png`),
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  background-color: #ff8383;
  background-image: url('../assets/oniku.png'); // とりあえず背景にしとく
}
</style>
