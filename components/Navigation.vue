<template>
  <nav ref="nav" class="navigation navigation--transparent section-100">
    <div class="navigation_wrapper section-85 center">
      <div class="navigation_logo">
        <!-- <img class="navigation_logo-svg" src="@/static/images/logo.svg" alt="logo" /> -->
        <div class="navigation_hamburger" @click="showNav()">
          <svg
            width="37"
            height="25"
            viewBox="0 0 29 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="35" height="5" rx="3.5" fill="rgb(0, 255, 123)" />
            <rect width="35" height="5" rx="3.5" fill="rgb(0, 255, 123)" />
            <rect width="35" height="5" rx="3.5" fill="rgb(0, 255, 123)" />
            <rect y="20" width="35" height="5" rx="3.5" fill="rgb(0, 255, 123)" />
            <rect y="20" width="35" height="5" rx="3.5" fill="rgb(0, 255, 123)" />
            <rect y="20" width="35" height="5" rx="3.5" fill="rgb(0, 255, 123)" />
            <rect y="10" width="35" height="5" rx="3.5" fill="rgb(0, 255, 123)" />
            <rect y="10" width="35" height="5" rx="3.5" fill="rgb(0, 255, 123)" />
            <rect y="10" width="35" height="5" rx="3.5" fill="rgb(0, 255, 123)" />
          </svg>
        </div>
      </div>
      <ul ref="navigation_menu" class="navigation_menu">
        <li class="navigation_menu-item"><nuxt-link :to="`/`">Home</nuxt-link></li>
        <li class="navigation_menu-item"><nuxt-link :to="`/#portofolio`">Portfolio</nuxt-link></li>
        <!-- <li class="navigation_menu-item">Trainings</li> -->
        <nuxt-link :to="`/contact`"> <li class="navigation_menu-item">Contact</li></nuxt-link>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  fetch ({ store }) {
    store.commit('toggle')
  },
  methods: {
    showNav() {
      this.$store.commit('toggle')
      this.$refs.navigation_menu.classList.toggle("active");
    },
    // changeNav() {
    //   if (window.scrollY > 600) {
    //     this.$refs.nav.classList.add("scroll");
    //   } else {
    //     this.$refs.nav.classList.remove("scroll");
    //   }
    // }
  },
// created () {
//     if (process.browser) { 
//         window.addEventListener('scroll', this.changeNav);
//     }
// },
// destroyed () {
//     if (process.browser) { 
//         window.removeEventListener('scroll', this.changeNav);
//     }
// }
};
</script>
<style lang="scss">
@import "@/assets/scss/components/_navigation.scss";
</style>
