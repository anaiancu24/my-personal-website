<template>
  <div class="section-cards section-85 padding-64 center">
    <h3>Some skills I have</h3>
    <div class="section-cards_wrapper">
      <div class="card" v-for="(cardInfo, index) in cardsInfo" :key="index">
        <img class="card-image" src="@/static/images/illustration_skills1.svg" :alt="cardInfo.imageAlt"/> 
        <h4 class="card-title">{{cardInfo.title}}</h4>
        <ul class="card-list">
          <li class="card-list-item" v-for="(listItem, index) in cardInfo.listItems" :key="index">{{listItem}}</li>
        </ul>
        <div class="skills">
          <div class="skills-item" v-for="(skillItem, index) in cardInfo.skillItems" :key="index">{{skillItem}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardsInfo: this.$store.state.cardsInfo
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/components/_skills.scss";
</style>
