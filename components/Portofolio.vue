<template>
  <div id="portofolio" class="portofolio section-100 padding-64 center">
    <h3>Portofolio</h3>
    <div class="portofolio-wrapper mb-100">
      <div class="button-toggle-container">
        <button @click="showWebDev" :class="{'selected' : webDev}" class="button-toggle">Web Development</button>
        <button @click="showChromeExt" :class="{'selected' : chromeExt}" class="button-toggle">Chrome Extension</button>
        <button @click="showOther" :class="{'selected' : other}" class="button-toggle">Other</button>
      </div>
    </div>
    <div class="portofolio-wrapper mb-100">
      <div v-if="webDev" class="portofolio-items">
        <div class="portofolio-item">
          <!-- <marquee> -->
            <div>
        <video width="33%" height="auto" autoplay muted>
          <source src="@/static/images/porto_generat.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
          <video width="33%" height="auto" autoplay muted>
          <source src="@/static/images/portofolio_segments.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        <video width="33%" height="auto" autoplay muted>
          <source src="@/static/images/portofolio_2020.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
            </div>
          <!-- </marquee> -->
        </div>
          <div class="row">
        <div class="column">
          <img src="@/static/images/portofolio_web1.png" style="width:100%" />
          <img src="@/static/images/porto_web5.jpg" style="width:100%" />

        <img src="@/static/images/portofolio_web4.png" style="width:100%" />
        </div>

        <div class="column">
          <img src="@/static/images/portofolio_web2.png" style="width:100%" />
          <img src="@/static/images/porto_web6.jpg" style="width:100%" />

        </div>
        <div class="column">
          <img src="@/static/images/portofolio_web3.png" style="width:100%" />
        <img src="@/static/images/porto_web7.jpg" style="width:100%" />

        </div>
      </div>
      </div>
       <div v-if="chromeExt" class="portofolio-items">
        <div class="portofolio-item">
          <video width="720" height="auto" autoplay muted>
          <source src="@/static/images/portofolio_booksmart2.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        </div>
      </div>
      <div v-if="other" class="portofolio-items">
        <div class="portofolio-item">
      <div class="row">
        <div class="column">
          <video style="width:100%" muted autoplay>
            <source src="@/static/images/portofolio_intro1.mp4" type="video/mp4" />
          </video>
           <video style="width:100%" muted autoplay>
            <source src="@/static/images/portofolio_intro4.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="column">
          <img src="@/static/images/portofolio_poster1.jpg" style="width:100%" />
          <video style="width:100%" muted autoplay>
            <source src="@/static/images/portofolio_intro3.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="column">
          <video style="width:100%" muted autoplay>
            <source src="@/static/images/portofolio_intro2.mp4" type="video/mp4" />
          </video>
      <img src="@/static/images/portofolio_logo1.jpg" style="width:100%" />
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        webDev:true,
        chromeExt: false,
        other:false
      }
    },
  methods: {
    showWebDev() {
      this.webDev = true;
      this.chromeExt = false;
      this.other = false;
    },
    showChromeExt() {
      this.webDev = false;
      this.chromeExt = true;
      this.other = false;
    },
    showOther() {
      this.webDev = false;
      this.chromeExt = false;
      this.other = true;
    },
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/components/_portofolio.scss";
</style>