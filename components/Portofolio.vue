<template>
<div class="portofolio section-100 padding-64 center mb-100">
    <h3>Some work I've done</h3>
<div class="portofolio-wrapper mb-100">
    <div class="portofolio-item" v-for="(website, index) in websites" :key="index" :style="{backgroundImage: getBackground(website)}">
    <span>test</span></div>
</div>
<div class="portofolio-video-wrapper center">
<iframe width="1020" height="540" src="https://www.youtube.com/embed/4Jwk4qX6gwQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      websites: this.$store.state.websites
    };
  },
  methods: {
    getBackground(website) {
        return "url(" + "'/images/" + website + "')";      
    }
  }
};
</script>
<style lang="scss">
@import '@/assets/scss/components/_portofolio.scss';
</style>