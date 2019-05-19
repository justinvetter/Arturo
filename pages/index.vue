<template>
  <div>
    <div id="scroll" class="scroll">
      Scroll for more
      <ScrollIcon/>
    </div>
    <Hero/>

    <Counting number="1234"/>

    <section id="bgImage1" class="bgImage fullHeight">
      <div class="background"></div>
      <article class="blue">
        <div>
          <h5 class="bgImage__title vertText h__white">What we do</h5>
          <div class="bgImage__content h__white">
            <h4 class="number">
              01
              <span>/03</span>
            </h4>
            <h4>Delivering physical property characteristics and predictive analysis</h4>
          </div>
        </div>
      </article>
    </section>
    <section id="bgImage2" class="bgImage bgImage__right fullHeight">
      <div class="background"></div>
      <article class="red">
        <div>
          <h5 class="bgImage__title vertText h__white">What we do</h5>
          <div class="bgImage__content h__white">
            <h4 class="number">
              02
              <span>/03</span>
            </h4>
            <h4>Understanding activity patterns to better understand risk</h4>
          </div>
        </div>
      </article>
    </section>
    <section id="bgImage3" class="bgImage fullHeight">
      <div class="background"></div>
      <article class="ltBlue">
        <div>
          <h5 class="bgImage__title vertText h__white">What we do</h5>
          <div class="bgImage__content h__white">
            <h4 class="number">
              03
              <span>/03</span>
            </h4>
            <h4>Analysis for developing countries enabling creation of new markets</h4>
          </div>
        </div>
      </article>
    </section>
    <section id="logos" class="logos fullHeight bg__dkBlue">
      <article id="pin1">
        <h5 class="vertText">Our Customers</h5>
        <div class="logos__block">
          <div>
            <KinLogo/>
          </div>
          <div>
            <RoofrLogo/>
          </div>
          <div>
            <HippoLogo/>
          </div>
          <div>
            <AmfamLogo/>
          </div>
        </div>
      </article>
    </section>

    <Cards/>

    <section class="process fullHeight">
      <article class="process__card">
        <div>
          <h5 class="process__title vertText h__white">Our Process</h5>
          <div class="process__content t__white h__white">
            <div class="process__item hidden">
              <img src="~assets/images/icon_proprietarty.svg">
              <h4>
                01
                <span>/03</span>
              </h4>
              <p>Arturo uses proprietary data to develop differentiated and transparent models</p>
            </div>
            <div class="process__item hidden">
              <img src="~assets/images/icon_models.svg">
              <h4>
                02
                <span>/03</span>
              </h4>
              <p>These models process the most recent input data available including images, mobile device, property records, and weather data</p>
            </div>
            <div class="process__item hidden">
              <img src="~assets/images/icon_ui.svg">
              <h4>
                03
                <span>/03</span>
              </h4>
              <p>Our customers use our API and UI to easily integrate these insights within their existing workflows</p>
            </div>
          </div>
        </div>
      </article>
    </section>
    <Footer/>
  </div>
</template>

<script>
import KinLogo from "@/components/icons/customer-logos/kin_logo_white.svg?inline";
import RoofrLogo from "@/components/icons/customer-logos/roofr_logo_white.svg?inline";
import HippoLogo from "@/components/icons/customer-logos/hippo_logo_white.svg?inline";
import AmfamLogo from "@/components/icons/am_fam_logo_white.svg?inline";
import ScrollIcon from "@/components/icons/scrollIcon.svg?inline";
import Footer from "@/layouts/partials/footer";
import Cards from "@/components/cards";
import Hero from "@/components/Hero";
import Counting from "@/components/Counting";
export default {
  components: {
    KinLogo,
    RoofrLogo,
    HippoLogo,
    AmfamLogo,
    Footer,
    Cards,
    Hero,
    Counting,
    ScrollIcon
  },

  created() {},

  mounted() {
    var animateHTML = function() {
      var elems;
      var windowHeight;
      function init() {
        elems = document.querySelectorAll(".hidden");
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
      }
      function addEventHandlers() {
        window.addEventListener("scroll", checkPosition);
        window.addEventListener("resize", init);
      }
      function checkPosition() {
        for (var i = 0; i < elems.length; i++) {
          var positionFromTop = elems[i].getBoundingClientRect().top;
          if (positionFromTop - windowHeight <= -250) {
            elems[i].className = elems[i].className.replace(
              "hidden",
              "fade-in-element"
            );
          }
        }
      }
      return {
        init: init
      };
    };
    animateHTML().init();
    //////////////////////
    //BGimage Section 1//
    /////////////////////

    const bg1Background = this.$scrollmagic.scene({
      triggerElement: "#bgImage1 .background",
      triggerHook: 1
    });
    this.$scrollmagic.addScene(
      bg1Background.setClassToggle("#bgImage1 .background", "on")
    );

    const bg1BackgroundOut = this.$scrollmagic.scene({
      triggerElement: "#bgImage2 .background",
      triggerHook: 0.5
    });
    this.$scrollmagic.addScene(
      bg1BackgroundOut.setClassToggle("#bgImage1 .background", "off")
    );

    const bg1Article = this.$scrollmagic.scene({
      triggerElement: "#bgImage1 .background",
      triggerHook: 0.7
    });

    this.$scrollmagic.addScene(
      bg1Article.setClassToggle("#bgImage1 article", "on")
    );

    const bg1ArticleOut = this.$scrollmagic.scene({
      triggerElement: "#bgImage2 .background",
      triggerHook: 0.5
    });
    this.$scrollmagic.addScene(
      bg1ArticleOut.setClassToggle("#bgImage1 article", "off")
    );

    const bg1Number = this.$scrollmagic.scene({
      triggerElement: "#bgImage1",
      triggerHook: 0.45
    });

    this.$scrollmagic.addScene(
      bg1Number.setClassToggle("#bgImage1 .number", "reveal-text")
    );

    const bg1article = this.$scrollmagic.scene({
      triggerElement: "#bgImage1",
      triggerHook: 0.35
    });

    this.$scrollmagic.addScene(bg1article.setClassToggle("#bgImage1 h4", "in"));


    //////////////////////
    //BGimage Section 2//
    /////////////////////

    const bg2Background = this.$scrollmagic.scene({
      triggerElement: "#bgImage2 .background",
    });

    this.$scrollmagic.addScene(
      bg2Background.setClassToggle("#bgImage2 .background", "on")
    );

    const bg2BackgroundOut = this.$scrollmagic.scene({
      triggerElement: "#bgImage3 .background",
      triggerHook: 0.5
    });
    this.$scrollmagic.addScene(
      bg2BackgroundOut.setClassToggle("#bgImage2 .background", "off")
    );

    const bg2Article = this.$scrollmagic.scene({
      triggerElement: "#bgImage2 .background",
      triggerHook: 0.5
    });

    this.$scrollmagic.addScene(
      bg2Article.setClassToggle("#bgImage2 article", "on")
    );

    const bg2ArticleOut = this.$scrollmagic.scene({
      triggerElement: "#bgImage3 .background",
      triggerHook: 0.5
    });
    this.$scrollmagic.addScene(
      bg2ArticleOut.setClassToggle("#bgImage2 article", "off")
    );

    const bg2Number = this.$scrollmagic.scene({
      triggerElement: "#bgImage2",
      triggerHook: 0.5
    });

    this.$scrollmagic.addScene(
      bg2Number.setClassToggle("#bgImage2 .number", "reveal-text")
    );

    const bg2article = this.$scrollmagic.scene({
      triggerElement: "#bgImage2",
      triggerHook: 0.35
    });

    this.$scrollmagic.addScene(bg2article.setClassToggle("#bgImage2 h4", "in"));


    //////////////////////
    //BGimage Section 3//
    /////////////////////

    const bg3Background = this.$scrollmagic.scene({
      triggerElement: "#bgImage3 .background",
      triggerHook: 0.5
    });
    this.$scrollmagic.addScene(
      bg3Background.setClassToggle("#bgImage3 .background", "on")
    );

    const bg3Article = this.$scrollmagic.scene({
      triggerElement: "#bgImage3 .background",
      triggerHook: 0.7
    });

    this.$scrollmagic.addScene(
      bg3Article.setClassToggle("#bgImage3 article", "on")
    );

    const bg3Number = this.$scrollmagic.scene({
      triggerElement: "#bgImage3",
      triggerHook: 0.5
    });

    this.$scrollmagic.addScene(
      bg3Number.setClassToggle("#bgImage3 .number", "reveal-text")
    );

    const bg3article = this.$scrollmagic.scene({
      triggerElement: "#bgImage3",
      triggerHook: 0.3
    });

    this.$scrollmagic.addScene(bg3article.setClassToggle("#bgImage3 h4", "in"));

    const bg3pin = this.$scrollmagic.scene({
      triggerElement: "#bgImage3",
      triggerHook: "onLeave",
      reverse: true
    });

    this.$scrollmagic.addScene(
      bg3pin.setPin("#bgImage3", { pushFollowers: false })
    );


    /////////
    //Logos//
    /////////

    const logos = this.$scrollmagic.scene({
      triggerElement: "#logos",
      triggerHook: "onLeave",
      reverse: true
    });

    this.$scrollmagic.addScene(
      logos.setPin("#logos", { pushFollowers: false })
    );




    const scene3 = this.$scrollmagic.scene({
      triggerElement: "footer",
      triggerHook: 1,
      reverse: true
    });

    this.$scrollmagic.addScene(scene3.setClassToggle(".scroll", "hide"));

    var scrollStop = function(callback) {
      var scroll = document.getElementById("scroll");
      // Make sure a valid callback was provided
      if (!callback || typeof callback !== "function") return;

      // Setup scrolling variable
      var isScrolling;

      // Listen for scroll events
      window.addEventListener(
        "scroll",
        function(event) {
          // Clear our timeout throughout the scroll
          window.clearTimeout(isScrolling);

          // Set a timeout to run after scrolling ends
          isScrolling = setTimeout(function() {
            // Run the callback

            callback();
          }, 500);
        },
        false
      );
    };

    window.onscroll = function(e) {
      var scroll = document.getElementById("scroll");
      scroll.classList.add("hidden");
    };

    scrollStop(function() {
      var scroll = document.getElementById("scroll");
      scroll.classList.remove("hidden");
    });
  }
};
</script>

<style lang="scss" scoped>
.hero {
  height: 75vh;
}
.counting {
  height: 25vh;
}

#bgImage1 {
  .background {
    background-image: url("~assets/images/img_01_home.jpg");
  }
}
#bgImage2 {
  .background {
    background-image: url("~assets/images/img_02_home.jpg");
  }
}
#bgImage3 {
  .background {
    background-image: url("~assets/images/img_03_home_tanks.jpg");
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in-element {
  animation: fade-in 0.5s;
}

.hidden {
  opacity: 0;
  transition: all 0.5s ease;
}
.scroll {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 999;
  left: 50%;
  margin-left: -2rem;
  color: $color_teal;
  font-weight: bold;
  transition: opacity 0.5s ease;
  svg {
    fill: $color_teal;
    width: 2.5rem;
    height: 2.5rem;
    position: relative;
    animation: breath 0.75s alternate linear infinite;
  }
  &.hide {
    opacity: 0;
  }
}

@keyframes breath {
  0% {
    top: -6px;
  }

  50% {
    top: 0px;
  }

  100% {
    top: 6px;
  }
}
</style>

