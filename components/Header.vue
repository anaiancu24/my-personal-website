<template>
<div class="header section-100 center" id="header">
    <div class="header_text">
    <h2 class="header_name">Ana-Maria Iancu</h2>
    <h1 class="header_title">Full Stack Web Developer</h1>
    </div>
    <div class="header_skill-circles">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 300 300" preserveAspectRatio="none" style="width:300; height:300; top:0; left:0;">
    <circle cx="100" cy="100" r="77" class="skill-halo" fill="none" stroke="#6C63FF" stroke-width="15" stroke-dasharray="0,20000" transform="rotate(-90,100,100)" />
        <text id="myTimer" text-anchor="middle" x="100" y="110" style="font-size: 16px;">Responsiveness</text>

</svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 300 300" preserveAspectRatio="none" style="width:300; height:300; top:0; left:0;">
    <circle cx="100" cy="100" r="77" class="skill-halo" fill="none" stroke="#6C63FF" stroke-width="15" stroke-dasharray="0,20000" transform="rotate(-90,100,100)" />
            <text id="myTimer" text-anchor="middle" x="100" y="110" style="font-size: 16px;">Design</text>
</svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 300 300" preserveAspectRatio="none" style="width:300; height:300; top:0; left:0;">
    <circle cx="100" cy="100" r="77" class="skill-halo" fill="none" stroke="#6C63FF" stroke-width="15" stroke-dasharray="0,20000" transform="rotate(-90,100,100)" />
            <text id="myTimer" text-anchor="middle" x="100" y="110" style="font-size: 16px;">Interactivity</text>
</svg>
    </div>
</div>
</template>
<script>
export default {
    mounted: function() {
  var circles = document.getElementsByClassName('skill-halo');
  var interval = 10;
  var angle = 0;
  var angle_increment = 6;

    for (let i=0; i<=circles.length;i++) {
  window.timer = window.setInterval(function() {
    circles[i].setAttribute("stroke-dasharray", angle + ", 20000");

    if (angle >= 360) {
      window.clearInterval(window.timer);
    }
    angle += angle_increment;
  }.bind(this), interval);
    }

    }
}
</script>
<style lang="scss">
@import '@/assets/scss/components/_header.scss';
</style>