<template>
  <nav class="slideout-menu" id="slideout-menu">
    <ul>
      <h5 class="vertText h__white">Navigation</h5>
      <li>
        <nuxt-link @click.native="toggleMenue" to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="toggleMenue" to="about-us">About Us</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="toggleMenue" to="our-value">Our Value</nuxt-link>
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
    var menu, toggleButton, closeButton;

    // Set Elements
    menu = document.getElementById("slideout-menu");
    toggleButton = document.getElementById("slideout-toggle");
    closeButton = document.getElementById("slideout-close");

    // Toggle Menu
    toggleButton.addEventListener("click", function(e) {
      e.preventDefault();
      menu.classList.toggle("is-open");
    });
  },
};
</script>

<style lang="scss" scoped>
</style>

