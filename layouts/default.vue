<template>
  <div onclick="void(0);" >
    <Menu />
    <nuxt />
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
