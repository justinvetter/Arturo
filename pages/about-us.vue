<template>
  <div>
    <section class="bgImage bgImage-squish about fullHeight">
      <div class="background squish-image"></div>
      <article class="blue">
        <div>
          <h5 class="bgImage__title vertText h__white">About Us</h5>
          <div class="bgImage__content h__white">
            <h4 class="in">Eliminating complexity, delivering insight.</h4>
          </div>
        </div>
      </article>
    </section>
    <section class="cards cards__right fullHeight">
      <div class="image" style=""></div>
      <article class="card card__dkBlue">
        <div>
          <h5 class="card__title vertText h__white">About Us</h5>
          <div class="card__content h__white">
            <h4>Our story</h4>
            <p>Arturo products represents a 3+ year investment and Research and Development inside a Top 20 US Insurance carrier and a team with intimate knowledge of the problem- space, a strong track record of successful execution, and relentless commitment to delivering real value to our customers.</p>
            <p>We’re passionate about eliminating the complexity of extracting insights from ensemble data sets and specialize in being able to deliver accurate predictions in formats that are immediately useful inside our customer’s business systems.</p>
          </div>
        </div>
      </article>
    </section>

    <section class="leadership">
      <!-- <h5 class="leadership__title vertText">About Us</h5> -->
      <div class="leaders">
        <div class="leader">
          <div class="image">
            <img src="~assets/images/img_jc.png">
          </div>
          <div class="leader__info h__white t__white">
            <h3>John-Isaac Clark</h3>
            <p>CEO</p>
          </div>
          <p
            class="leader__bio"
          >Former Head of Commercial Product at DigitalGlobe. 10+ years startup background in geospatial and location-based analytics. Recovering software engineer.</p>
        </div>

        <div class="leader">
          <div class="image">
            <img src="~assets//images/img_bt.jpg">
          </div>
          <div class="leader__info h__white t__white">
            <h3>Dr. Ben Tuttle</h3>
            <p>CTO</p>
          </div>
          <p
            class="leader__bio"
          >Former Head of Product for National Geospatial Intelligence Agency (NGA) GEOINT Services. 10+ years remote sensing, computer vision, and machine learning. Geographer.</p>
        </div>
      </div>

      <div class="people">
        <div class="person">
          <div class="image">
            <img src="~assets//images/advisor_01.jpg">
          </div>
          <div class="person__info h__white t__white">
            <h3>Rob Painter</h3>
            <p>Managing Director
              <br>RazorsEdge Ventures
            </p>
            <a class="button button__teal" href="#">Visit LinkedIn</a>
          </div>
        </div>
        <div class="person">
          <div class="image">
            <img src="~assets//images/advisor_02.jpg">
          </div>
          <div class="person__info h__white t__white">
            <h3>Dr. Andy Hock</h3>
            <p>Director of Product
              <br>Cerebras Systems
            </p>
            <a class="button button__teal" href="#">Visit LinkedIn</a>
          </div>
        </div>
        <div class="person">
          <div class="image">
            <img src="~assets//images/advisor_03.jpg">
          </div>
          <div class="person__info h__white t__white">
            <h3>Dr. Drew Conway</h3>
            <p>Founder & CEO
              <br>Alluvium
            </p>
            <a class="button button__teal" href="#">Visit LinkedIn</a>
          </div>
        </div>
        <div class="person">
          <div class="image">
            <img src="~assets//images/advisor_04.jpg">
          </div>
          <div class="person__info h__white t__white">
            <h3>Dr. Marty Buchheim</h3>
            <p>Director, Data Science & Analytics Lab | American Family Insurance</p>
            <a class="button button__teal" href="#">Visit LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
    <section class="bgImage about bgImage-about fullHeight">
      <div
        class="background"
        style="background-image: url('https://via.placeholder.com/857x453.jpg?text=FPO"
      ></div>
      <article class="ltBlue">
        <div>
          <h5 class="bgImage__title vertText h__white">About Us</h5>
          <div class="bgImage__content h__white">
            <h4>Careers</h4>
            <p>
              We are growing rapidly and looking for talented, passionate, and driven individuals to join our diverse team. Sound like you? Email us at
              <a
                class="dkBlue"
                href="mailto:careers@arturo.ai"
              >careers@arturo.ai</a>
            </p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  //scrollToTop: true
};
</script>

<style lang="scss" scoped>
    .squish-image{
        background-image: url('~assets/images/img_hero_aboutus_v2.png')
    }
    .cards{
        .image{
            background-image: url('~assets/images/img_hero_aboutus.png');
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
</style>

