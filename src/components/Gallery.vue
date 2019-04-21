<template>
  <div class="gallery">
    <SectionHeader title="Gallery" />
    <div class="gallery-container">
      <carousel
        :per-page-custom="[[0, 1], [1120, 3]]"
        :autoplay="true"
        :loop="true"
      >
        <slide v-for="image in images" :key="image.id">
          <div>
            <img :src="image.src" />
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'
import { Carousel, Slide } from 'vue-carousel';

const SLIDE_COUNT = 3;

export default {
  name: 'Gallery',
  components: {
    SectionHeader,
    Carousel,
    Slide,
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
$breakPointPc: 1120px;
$breakPointSp: 375px;

.gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  background-color: #ff8383;
  background-image: url('../assets/oniku.png'); // とりあえず背景にしとく

  &-container {
    margin-top: 3rem;
    max-width: 90%;

    img {
      width: 95%;
      max-width: 95%;
      height: auto;
    }
  }
}
</style>
