<template>
  <div class="page" >
    <ScrollForMore/>
    <div class="page-body" >
      <div class="thank-you-wrapper" >
        <h2 class="thank-you-header" >
            Thank you for requesting a demo from Arturo.
        </h2>
        <p class="thank-you-body" >
            A representative from Arturo will be in contact with you soon.
        </p>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import ScrollForMore from "@/components/ScrollForMore";
import Footer from "@/layouts/partials/footer-wo-demo";
export default {
  components: {
    ScrollForMore,
    Footer
  },
  head() {
    return {
      title: "Thank You | Arturo",
      meta: [{ hid: "description", name: "description", content: "Thank you for requesting a demo." }]
    };
  }
};
</script>

<style lang="scss" scoped>
  .page-body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .thank-you {
    &-wrapper {
      width: 70vw;
      height: 50vh;
      max-width:100%;
      padding: 4vh;
      background-color: $color_blue;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media screen and (max-width:998px) {
        width: 100%;
      }
    }

    &-header {
      font-size: 250%;
      padding: 1vh 0;
    }

    &-body {
      padding: 1vh 0;
      font-size: 150%;
    }
  }
</style>
