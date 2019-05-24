<template>
  <nav class="slideout-menu" id="slideout-menu">
    <ul>
      <h5 class="vertText h__white">Navigation</h5>
      <li>
        <nuxt-link @click.native="toggleMenue" to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="toggleMenue" to="/about-us">About Us</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="toggleMenue" to="/our-value">Our Value</nuxt-link>
      </li>
    </ul>
    <SocialList class="mobile-social" />
    <div class="slider">
      <div class="logo">
        <nuxt-link to="/"><ArturoMark /></nuxt-link>
      </div>
      <a class="slideout-toggle vertText t__white" href="#" id="slideout-toggle">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>MENU
      </a>
      <SocialList class="social" />
    </div>
  </nav>
</template>

<script>

import ArturoMark from '@/components/icons/arturo_white_mark.svg?inline';
import SocialList from '@/components/SocialList';

const interaction_debounce = 300;
var timestamp = 0;

export default {
  methods: {
    toggleMenue: function () {
      const menu = document.getElementById("slideout-menu");
      menu.classList.toggle("is-open");
    }
  },
  components:{
    ArturoMark,
    SocialList
  },
  mounted() {
    var after_interact = function (e) {
      console.log('Toggle button clicked');
      e.preventDefault();
      let c_time = new Date().getTime();
      if (c_time - interaction_debounce <= timestamp) {
        return;
      }
      timestamp = c_time;
      if (!menu) return;
      menu.classList.toggle("is-open");
    }
    console.log('Menu mounted');
    var menu, toggleButton, closeButton;
    // Set Elements
    menu = document.getElementById("slideout-menu");
    toggleButton = document.getElementById("slideout-toggle");
    closeButton = document.getElementById("slideout-close");

    timestamp = new Date().getTime();

    // Toggle Menu
    toggleButton.addEventListener("click", function(e) {
    });
  },
  watch: {
    $route() {
      let menu = document.getElementById("slideout-menu");
      if (menu) {
        menu.classList.remove('hide-from-footer');
      }
      let scroll = document.getElementById("scroll");
      if (scroll) {
        scroll.classList.remove('hide-from-footer');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

