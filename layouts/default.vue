<template>
  <div>
    <Menu />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Menu from './partials/menu';
import Footer from './partials/footer';
export default {
  components: {
    Menu,
    Footer
  }
}
</script>


<style>

</style>
