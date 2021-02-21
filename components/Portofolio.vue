<template>
  <div id="portofolio" class="portofolio section-100 padding-64 center mb-100">
    <h3 class="mb-50">Portfolio</h3>
    <div class="portofolio-wrapper">
      <div class="button-toggle-container mb-50">
        <button
          @click="showFrontend"
          :class="{ selected: frontend }"
          class="button-toggle"
        >
          Web Development
        </button>
        <!-- <button
          @click="showBackend"
          :class="{ selected: backend }"
          class="button-toggle"
        >
          Backend
        </button> -->
        <button
          @click="showChromeExt"
          :class="{ selected: chromeExt }"
          class="button-toggle"
        >
          Chrome Extension
        </button>
        <button
          @click="showOther"
          :class="{ selected: other }"
          class="button-toggle"
        >
          Other
        </button>
      </div>
    </div>
    <div class="portofolio-wrapper">
      <div v-if="frontend" class="portofolio-items">
        <div class="mb-50" style="background: none">
          <div class="section_50-50-right">
            <div class="content">
              <h4>Flexible, reusable and long-lasting solutions</h4>
              <p>
                Focused on creating and building solutions that offer a great
                user experience and increase the conversion rates.
              </p>
              <div class="skills">
                <p>Stack and tools used:</p>
                <div class="skills-item"><span>HTML</span></div>
                <div class="skills-item"><span>SASS</span></div>
                <div class="skills-item"><span>Javascript</span></div>
                <div class="skills-item"><span>Vue.js</span></div>
                <div class="skills-item"><span>Ajax</span></div>
                <div class="skills-item"><span>PHP</span></div>
                <div class="skills-item"><span>Hubspot integration</span></div>
                <div class="skills-item"><span>REST API</span></div>
              </div>
            </div>
          </div>
          <div class="section_50-50-left">
            <video class="frontend3" muted autoplay>
              <source src="@/static/images/frontend_3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="section_50-50" style="background: none">
          <div class="section_50-50-left">
            <img src="@/static/images/frontend_1.gif" />
          </div>
          <div class="section_50-50-right">
            <div class="content">
              <h4>Customised websites and landing pages</h4>
              <p>
                Focused on performance, responsiveness, cross-browser
                compatibility and design implementation.
              </p>
              <div class="skills">
                <p>Stack and tools used:</p>
                <div class="skills-item"><span>HTML</span></div>
                <div class="skills-item"><span>SASS</span></div>
                <div class="skills-item"><span>Javascript</span></div>
                <div class="skills-item"><span>jQuery</span></div>
                <div class="skills-item"><span>Plugins</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="section_50-50" style="background: none">
          <div class="section_50-50-left">
            <div class="content">
              <h4>Websites and landing pages using CMS builders</h4>
              <p>
                Focused on performance, responsiveness, cross-browser
                compatibility and design implementation.
              </p>
              <div class="skills">
                <p>Stack and tools used:</p>
                <div class="skills-item"><span>Wordpress</span></div>
                <div class="skills-item"><span>Wix</span></div>
                <div class="skills-item"><span>CSS</span></div>
                <div class="skills-item"><span>Plugins</span></div>
              </div>
            </div>
          </div>
          <div class="section_50-50-right">
            <img src="@/static/images/frontend_2.gif" />
          </div>
        </div>
      </div>
      <div v-if="backend" class="portofolio-items"></div>
      <div v-if="chromeExt" class="portofolio-items">
        <div class="portofolio-item">
          <div class="default-width">
            <p>
              As a side project, I've built my first Chrome Extension using
              Vue.js, and soon after that, it got published! <br />I needed an
              easier way to save pages in folders, as I find the default
              bookmarks functionality very user-unfriendly. <br />Give it a try!
              Rates, reviews, feedback much appreciated.
            </p>
            <div>
              <a
                href="https://chrome.google.com/webstore/detail/booksmart/nlffaabjkkfkehhdmcljfpcipffhhkbj?hl=en"
                target="_blank"
                ><img
                  class="chrome-store-img"
                  src="@/static/images/chrome_store.png"
              /></a>
            </div>
          </div>
          <img class="booksmart-gif" src="@/static/images/port_booksmart.gif" />
          <div class="skills">
            <p>Stack and tools used:</p>
            <div class="skills-item"><span>Vue.js</span></div>
            <div class="skills-item"><span>SASS</span></div>
            <div class="skills-item"><span>Chrome Web Store</span></div>
          </div>
          <div class="skills">
            <p>
              Check source code
              <a
                href="https://github.com/anaiancu24/vue-booksmart"
                target="_blank"
                >here</a
              >
            </p>
          </div>
        </div>
      </div>
      <div v-if="other" class="portofolio-items">
        <div class="portofolio-item">
          <div class="row">
            <div class="column">
              <video style="width: 100%" muted autoplay>
                <source
                  src="@/static/images/portofolio_intro1.mp4"
                  type="video/mp4"
                />
              </video>
              <video style="width: 100%" muted autoplay>
                <source
                  src="@/static/images/portofolio_intro4.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="column">
              <img
                src="@/static/images/portofolio_poster1.jpg"
                style="width: 100%"
              />
              <video style="width: 100%" muted autoplay>
                <source
                  src="@/static/images/portofolio_intro3.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="column">
              <video style="width: 100%" muted autoplay>
                <source
                  src="@/static/images/portofolio_intro2.mp4"
                  type="video/mp4"
                />
              </video>
              <img
                src="@/static/images/portofolio_logo1.jpg"
                style="width: 100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="skillshare-pres">
      <h3>Web Fundamentals everyone should know</h3>
      <p>
        This 30 min course covers the bare-bone-basics of HTML, CSS and SEO code
        optimisation. <br />I recommend it to anyone who works with websites,
        blogs, landing pages , but doesn’t want to go too much in depth. I only
        go through the web concepts that everyone should know these days.
        <br />Enjoy!
      </p>
      <a
        href="https://www.skillshare.com/r/profile/Ana-Maria-Iancu/525218"
        target="_blank"
      >
        <img src="@/static/images/skillshare.png" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      frontend: true,
      backend: false,
      chromeExt: false,
      other: false,
    };
  },
  methods: {
    showFrontend() {
      this.frontend = true;
      this.backend = false;
      this.chromeExt = false;
      this.other = false;
    },
    showBackend() {
      this.frontend = false;
      this.backend = true;
      this.chromeExt = false;
      this.other = false;
    },
    showChromeExt() {
      this.frontend = false;
      this.backend = false;
      this.chromeExt = true;
      this.other = false;
    },
    showOther() {
      this.frontend = false;
      this.backend = false;
      this.chromeExt = false;
      this.other = true;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/components/_portofolio.scss";
@import "@/assets/scss/components/_skills.scss";
</style>