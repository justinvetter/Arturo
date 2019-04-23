<template>
    <section class="counting">
      <h4>AI Insights delivered & counting </h4>
      <h2 id="countUp">1234</h2>
    </section>
</template>

<script>
export default {
    mounted() {
    function animateValue(id, start, end, duration) {
      var obj = document.getElementById(id);
      var range = end - start;
      var minTimer = 50;
      var stepTime = Math.abs(Math.floor(duration / range));

      stepTime = Math.max(stepTime, minTimer);

      var startTime = new Date().getTime();
      var endTime = startTime + duration;
      var timer;

      function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - remaining * range);
        obj.innerHTML = value;
        if (value == end) {
          clearInterval(timer);
        }
      }

      timer = setInterval(run, stepTime);
      run();
    }

    animateValue("countUp", 0, 1234, 3000);

    }
}
</script>

<style lang="scss" scoped>
    .counting {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    padding-bottom: 5vh;

    h4 {
        color: $color_darkBlue;
        font-weight: 100;
        font-size: em(24);
        width: 125px;
        line-height: 1.25;
    }

    h2 {
        color: $color_blue;
        font-size: em(125.78);
        font-weight: bold;
        border-left: solid 2px $color_teal;
        line-height: 1;
        margin-left: 3rem;
        padding-left: 3rem;
        text-align: right;
        min-width: 300px;
    }

    @media (max-width: 825px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h4 {
            width: 100%;
            text-align: center;
            padding-bottom: 1rem;
            font-size: em(20);
        }

        h2 {
            border-left: none;
            border-top: solid 2px $color_teal;
            text-align: center;
            margin-left: 0;
            padding-left: 0;
            padding-top: .5rem;
            font-size: em(100);
        }
    }
}
</style>
