<template>
<div class="header section-100 center" id="header">
    <div class="header_text" v-if="this.$store.state.submenuState">
    <h2 class="header_name">Ana-Maria Iancu</h2>
    <h1 class="header_title">Full Stack Web Developer</h1>
    </div>
</div>
</template>
<style lang="scss">
@import '@/assets/scss/components/_header.scss';
</style>