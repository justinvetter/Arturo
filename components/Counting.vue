<template>
    <section class="counting">
      <div id="countPhrase" >
        <h4 id="countPhraseWrapper" >AI Insights delivered &amp; counting</h4>
      </div>
      <div id="countUp">
        <h2 id="countUpWrapper" > </h2>
      </div>
    </section>
</template>

<script>
export default {
    mounted() {
      const canv = document.createElement('canvas');
      const ctx = canv.getContext('2d');
      const container = document.getElementById('countUpWrapper');
      const initial_font_size = 14.5; // vh
      const size_tolerance_min = 0.2;
      const size_tolerance_max = 0.12;
      var previous_length = null;
      var final_text = null; // string
      function fitTextToContainer(str) {
        if (str.length === previous_length) {
          return;
        }
        if (!str) {
          str = final_text;
        } else {
          final_text = str;
        }
        if (!str) {
          str = '';
        }
        previous_length = str.length;
        
        ctx.font = `${initial_font_size}vh "Gotham", Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif`;
        let size = ctx.measureText(str).width;
        let perc = initial_font_size;
        let tolerance_min = container.getBoundingClientRect().width * (1 - size_tolerance_min);
        let tolerance_max = container.getBoundingClientRect().width * (1 - size_tolerance_max);
        if (size < tolerance_max) {
          container.style.fontSize = `${initial_font_size}vh`;
          return;
        }
        let sm_perc = null;
        let lg_perc = parseInt(String(initial_font_size));
        let max_steps = 25;
        let step = -1;
        while (size < tolerance_min || size > tolerance_max) {
          step++;
          if (step >= max_steps) {
            break;
          }
          if (size < tolerance_min) {
            sm_perc = perc;
          } else {
            lg_perc = perc;
          }
          if (sm_perc === null) {
            perc = lg_perc / 10;
          } else {
            perc = (lg_perc + sm_perc) / 2;
          }
          ctx.font = `${perc}vh "Gotham", Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif`;
          size = ctx.measureText(str).width;
        }
        container.style.fontSize = `${perc}vh`;
      }

      function format_number(num) {
        let p_num = parseInt(num);
        if (isNaN(p_num) || !isFinite(p_num)) {
          return String(num);
        }
        p_num = String(p_num);
        let retval = '';
        for (let i = p_num.length - 1; i >= 0; i--) {
          let n_id = p_num.length - (i + 1);
          if (retval.length && n_id % 3 === 0) {
            retval = ',' + retval;
          }
          retval = p_num[i] + retval;
        }
        return retval;
      }
      
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
          obj.innerText = format_number(value);
          fitTextToContainer(obj.innerText);
          if (value == end) {
            clearInterval(timer);
          }
        }

        timer = setInterval(run, stepTime);
        run();
      }
      animateValue("countUpWrapper", 0, 6000000, 3000);
      window.addEventListener('resize', fitTextToContainer, false);
    }
}
</script>

<style lang="scss" scoped>
    .counting {
      display: flex;
      height: 25vh;
      width: 100%;
      padding: 5vh 2vh 5vh 70px; // sidemenu style
      box-sizing: border-box;

      #countPhrase {
        width: 38%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 3rem;
        box-sizing: border-box;
      }

      #countPhraseWrapper {
        color: $color_darkBlue;
        font-weight: 100;
        font-size: em(24);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 125px;
        flex: none;
        line-height: 1.25;
        box-sizing: border-box;
      }

      #countUp {
        position: relative;
        font-size: em(125.78);
        border-left: solid 2px $color_teal;
        padding-left: 3rem;
        width: 62%;
        height: 100%;
        box-sizing: border-box;
      }

      #countUpWrapper {
        color: $color_blue;
        font-weight: bold;
        line-height: 1;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        justify-content: center;
      }

      @media (max-width: 825px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        height: 20vh;

        #countPhrase {
          width: 100%;
          justify-content: center;
          padding-bottom: 1rem;
          font-size: em(20);
        }

        #countPhraseWrapper {
          width: auto;
        }

        #countUp {
          width: 100%;
          border-left: none;
          border-top: solid 2px $color_teal;
          margin-left: 0;
          padding-left: 0;
          padding-top: .5rem;
          font-size: em(100);
        }
      }
    }
</style>
