<template>
  <section class="hero">
    <div class="hero__content">
      <img src="~assets/images/arturo_white_logo.svg">
      <div class="h__white subhead">
        <h1>Enables understanding of the physical world</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.hero {
    background-image: url('~assets/images/img_home_hero.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: $color_blue;
    height: 75vh;
    width: 100%;
    display: flex;
    justify-content: center;

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            max-width: 886px;
            max-height: 202px;
            margin-bottom: 3em;
        }

        .subhead {
            max-width: em(648);
        }
    }
    @media (max-width: 1145px) {
        height: 50vh;
        &__content{
            padding: 0 10em;
            img{
                width: 100%;
                height: auto;
                max-width: auto;
                margin-bottom: 0;
            }
            &>div{

            }
        }
    }

    @media (max-width: 745px) {
        height: 50vh;
        min-height: 50vh;
        &__content{
            padding: 0 3em;
            img{
                width: 100%;
                height: auto;
                max-width: auto;
                margin-bottom: 2rem;
            }
            &>div{

            }
        }
    }
}

</style>

