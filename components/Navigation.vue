<template>
  <nav class="navigation navigation--transparent section-100">
    <div class="navigation_wrapper section-85 center">
      <div class="navigation_logo">
        <img class="navigation_logo-svg" src="@/static/images/logo.svg" alt="logo" />
        <div class="navigation_hamburger" @click="showNav()">
          <svg
            width="37"
            height="25"
            viewBox="0 0 29 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="35" height="5" rx="3.5" fill="#57B894" />
            <rect width="35" height="5" rx="3.5" fill="#57B894" />
            <rect width="35" height="5" rx="3.5" fill="#57B894" />
            <rect y="20" width="35" height="5" rx="3.5" fill="#57B894" />
            <rect y="20" width="35" height="5" rx="3.5" fill="#57B894" />
            <rect y="20" width="35" height="5" rx="3.5" fill="#57B894" />
            <rect y="10" width="35" height="5" rx="3.5" fill="#57B894" />
            <rect y="10" width="35" height="5" rx="3.5" fill="#57B894" />
            <rect y="10" width="35" height="5" rx="3.5" fill="#57B894" />
          </svg>
        </div>
      </div>
      <ul ref="navigation_menu" class="navigation_menu">
        <li class="navigation_menu-item">Home</li>
        <li class="navigation_menu-item">Portofolio</li>
        <li class="navigation_menu-item">Trainings</li>
        <li class="navigation_menu-item">Talk to me</li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  // data: {
  //   submenuState: false
  // },
  methods: {
    showNav() {
      this.$refs.navigation_menu.classList.toggle("active");
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/components/_navigation.scss";
</style>
