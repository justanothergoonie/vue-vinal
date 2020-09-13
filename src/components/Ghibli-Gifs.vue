<template>
  <div class="ghibli-gifs">
    <vueper-slides class="no-shadow" bullets-outside slide-image-inside transition-speed="250">
      <vueper-slide v-for="gif in gifs" :key="gif.id" :image="gif.images.original.url" />
    </vueper-slides>
    <span v-if="gifs.length > 0">Gifs Provided by GIPHY API</span>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  name: "GhibliGifs",
  props: ["gifs"]
};
</script>

<style>
.vueperslides__bullet .default {
  display: none;
}
.vueperslide__image {
  background-position: 50% 25%;
}

.carousel {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.gif-holder {
  display: flex;
  margin: 2%;
}
.ghibli-gif {
  width: 100px;
  height: 100px;
}
</style>
