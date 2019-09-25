<template>
  <footer class="fullHeight">
    <div class="footer__top">
      <div class="footer__top__card">
        <div class="card-left">
          <h3 class="h__dkBlue">Request a demo</h3>
          <p
            class="t__dkBlue"
          >Would you like to receive a demo of one of our amazing products? Click the link below to fill out a quick form, we promise we will not share any of your information we gather with third party companies.</p>
          <a class="button" v-on:click="show">Get the demo</a>
        </div>
        <div class="vr"></div>
        <div class="card-right">
          <MediumIcon/>
          <h5 class="h__dkBlue">Subscribe to our blog on Medium</h5>
          <a class="button" href="https://medium.com/@arturo.ai" target="_blank">Visit the Blog</a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="bottom-content t__white">
        <div class="bottom-left">
          <a href="/"></a>
          <nuxt-link to="/">
            <ArturoLogo/>
          </nuxt-link>
          <div class="address">
            350 North Orleans Street
            <br>Suite 8000N
            <br>Chicago IL 60654
            <br>312-535-3006
            <br>
            <a href="mailto:info@arturo.ai">info@arturo.ai</a>
          </div>
        </div>
        <div class="bottom-center">©2019 Arturo inc.</div>
        <div class="bottom-right">
          <SocialList class="social"/>
          <nuxt-link to="/">Home</nuxt-link>//<nuxt-link to="/about-us">About Us</nuxt-link>//<nuxt-link to="/our-value">Our Value</nuxt-link>
        </div>
      </div>
    </div>
    <Modal/>
  </footer>
</template>

<script>
import MediumIcon from "@/components/icons/Medium-icon/medium_icon_white.svg?inline";
import ArturoLogo from "@/components/icons/Arturo-vertical-logo/arturo_vertical_logo_white.svg?inline";
import SocialList from "@/components/SocialList";
import Modal from "@/components/Modal";
import { TweenMax, Elastic } from "gsap";

var footer_menu_scene = null;
var footer_scroll_scene = null;

export default {
  components: {
    SocialList,
    ArturoLogo,
    MediumIcon,
    Modal
  },

  mounted() {
    const scene = this.$scrollmagic.scene({
      triggerElement: "footer",
      triggerHook: 0.01,
      reverse: true
    });

    this.$scrollmagic.addScene(
      scene.setClassToggle("footer .footer__top", "scrollz")
    );

    const scene2 = this.$scrollmagic.scene({
      triggerElement: "footer",
      triggerHook: 0.2,
      reverse: true,
      duration: 150
    });

    this.$scrollmagic.addScene(
      scene2.setTween("footer .footer__bottom", { "margin-top": "0" })
    );

    footer_menu_scene = this.$scrollmagic.scene({
        triggerElement: 'footer',
        triggerHook: 1,
        reverse: true,
    });
    footer_menu_scene.setClassToggle('#slideout-menu', 'hide-from-footer');

    this.$scrollmagic.addScene(footer_menu_scene);

    footer_scroll_scene = this.$scrollmagic.scene({
        triggerElement: 'footer',
        triggerHook: 1,
        reverse: true,
    });
    footer_scroll_scene.setClassToggle('#scroll', 'hide-from-footer');

    this.$scrollmagic.addScene(footer_scroll_scene);
  },
  beforeDestroy() {
    footer_menu_scene.removeClassToggle();
    footer_scroll_scene.removeClassToggle();
  },
  methods: {
    show() {
      this.$modal.show("demo");
    }
  }
};
</script>

<style>
</style>
