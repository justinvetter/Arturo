<template>
  <div>
    <Hero />

    <Counting number="1234" />

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

    <Cards />

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
import Footer from '@/layouts/partials/footer';
import Cards from '@/components/cards';
import Hero from "@/components/Hero";
import Counting from "@/components/Counting"
export default {
  components: {
    KinLogo,
    RoofrLogo,
    HippoLogo,
    AmfamLogo,
    Footer,
    Cards,
    Hero,
    Counting
  },

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



    const bg2Background = this.$scrollmagic.scene({
      triggerElement: "#bgImage2 .background",
      duration: 400
    });

    this.$scrollmagic.addScene(
      bg2Background.setTween("#bgImage2 .background", { left: 0 })
    );

    const bg2Article = this.$scrollmagic.scene({
      triggerElement: "#bgImage2 .background",
      duration: 300,
      triggerHook: 0.7
    });

    this.$scrollmagic.addScene(
      bg2Article.setTween("#bgImage2 article", { right: "0" })
    );

    const bg3Background = this.$scrollmagic.scene({
      triggerElement: "#bgImage3 .background",
      duration: 400,
      triggerHook: .5
    });
    this.$scrollmagic.addScene(
      bg3Background.setTween("#bgImage3 .background", { right: 0 })
    );

    const bg1Background = this.$scrollmagic.scene({
      triggerElement: "#bgImage1 .background",
      duration: 400,
      triggerHook: 1
    });
    this.$scrollmagic.addScene(
      bg1Background.setTween("#bgImage1 .background", { right: 0 })
    );



      const bg1BackgroundOut = this.$scrollmagic.scene({
      triggerElement: "#bgImage2 .background",
      duration: 400,
      triggerHook: .5
    });
    this.$scrollmagic.addScene(
      bg1BackgroundOut.setTween("#bgImage1 .background", { right: '-80vw' })
    );


      const bg2BackgroundOut = this.$scrollmagic.scene({
      triggerElement: "#bgImage3 .background",
      duration: 400,
      triggerHook: .5
    });
    this.$scrollmagic.addScene(
      bg2BackgroundOut.setTween("#bgImage2 .background", { left: '-80vw' })
    );

    const bg1Article = this.$scrollmagic.scene({
      triggerElement: "#bgImage1 .background",
      duration: 300,
      triggerHook: 0.7
    });


    this.$scrollmagic.addScene(
      bg1Article.setTween("#bgImage1 article", { left: "0" })
    );

    const bg3Article = this.$scrollmagic.scene({
      triggerElement: "#bgImage3 .background",
      duration: 300,
      triggerHook: 0.7
    });

    this.$scrollmagic.addScene(
      bg3Article.setTween("#bgImage3 article", { left: "0" })
    );

    const logos = this.$scrollmagic.scene({
      triggerElement: "#logos",
      triggerHook: "onLeave",
      reverse: true
    });

    this.$scrollmagic.addScene(logos.setPin("#logos", {pushFollowers: false}));

    const bg3pin = this.$scrollmagic.scene({
      triggerElement: "#bgImage3",
      triggerHook: "onLeave",
      reverse: true
    });

    this.$scrollmagic.addScene(bg3pin.setPin("#bgImage3", {pushFollowers: false}));



    const bg1Number = this.$scrollmagic.scene({
      triggerElement: "#bgImage1",
      triggerHook: .35
    })

    this.$scrollmagic.addScene(bg1Number.setClassToggle("#bgImage1 .number", 'reveal-text'))


    const bg2Number = this.$scrollmagic.scene({
      triggerElement: "#bgImage2",
      triggerHook: .35
    })

    this.$scrollmagic.addScene(bg2Number.setClassToggle("#bgImage2 .number", 'reveal-text'))


    const bg3Number = this.$scrollmagic.scene({
      triggerElement: "#bgImage3",
      triggerHook: .35
    })

    this.$scrollmagic.addScene(bg3Number.setClassToggle("#bgImage3 .number", 'reveal-text'))


    const bg1article = this.$scrollmagic.scene({
      triggerElement: "#bgImage1",
      triggerHook: .25
    })

    this.$scrollmagic.addScene(bg1article.setClassToggle("#bgImage1 h4", 'in'))


    const bg2article = this.$scrollmagic.scene({
      triggerElement: "#bgImage2",
      triggerHook: .25
    })

    this.$scrollmagic.addScene(bg2article.setClassToggle("#bgImage2 h4", 'in'))


    const bg3article = this.$scrollmagic.scene({
      triggerElement: "#bgImage3",
      triggerHook: .25
    })

    this.$scrollmagic.addScene(bg3article.setClassToggle("#bgImage3 h4", 'in'))
  }
};
</script>

<style lang="scss" scoped>
.hero{
  height: 75vh;
}
.counting{
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
</style>

