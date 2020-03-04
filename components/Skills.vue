<template>
<div class="section-cards">
    <h3>Some skills I have</h3>
<div v-for="(cardInfo, index) in cardsInfo" :key="index" class="cards-wrapper">
    <h4>{{cardInfo.title}}</h4>
    <img :src="cardInfo.image" :alt="cardInfo.imageAlt">
    <ul>
        <li v-for="(listItem, index) in cardInfo.listItems" :key="index">{{listItem}}</li>
    </ul>
    <div class="skills-bubbles">
        <div v-for="(skillItem, index) in cardInfo.skillItems" :key="index">{{skillItem}}</div>
    </div>
<div class="card">
</div>
</div>
</div>
</template>
<script>
export default {
  data() {
      return {
      cardsInfo: this.$store.state.cardsInfo,
      }
  },
};
</script>
<style lang="scss">
</style>
