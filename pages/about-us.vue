<template>
  <div>
    <ScrollForMore/>
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
      <div class="image" style></div>
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
            <img src="~assets/images/img_jc.jpg" class="hidden">
          </div>
          <div class="leader__info h__white t__white">
            <h3>John-Isaac Clark</h3>
            <p>CEO</p>
          </div>
          <p class="leader__bio">
            Former Head of Commercial Product at DigitalGlobe. 10+ years startup background in geospatial and location-based analytics. Recovering software engineer.
            <a
              class="button button__teal button__spacer"
              target="_blank"
              href="https://www.linkedin.com/in/johnisaacclark/"
            >Visit LinkedIn</a>
          </p>
        </div>

        <div class="leader">
          <div class="image">
            <img src="~assets//images/img_ben.jpg" class="hidden">
          </div>
          <div class="leader__info h__white t__white">
            <h3>Dr. Ben Tuttle</h3>
            <p>CTO</p>
          </div>
          <p class="leader__bio">
            Former Head of Product for National Geospatial Intelligence Agency (NGA) GEOINT Services. 10+ years remote sensing, computer vision, and machine learning. Geographer.
            <a
              class="button button__teal button__spacer"
              target="_blank"
              href="https://www.linkedin.com/in/benjamintuttle/"
            >Visit LinkedIn</a>
          </p>
        </div>
      </div>

      <div class="people">
        <div class="person">
          <div class="image">
            <img src="~assets//images/img_rob.jpg" class="hidden">
          </div>
          <div class="person__info h__white t__white">
            <h3>Rob Painter</h3>
            <p>
              Managing Director
              <br>RazorsEdge Ventures
            </p>
            <a
              class="button button__teal"
              target="_blank"
              href="https://www.linkedin.com/in/ripainter/"
            >Visit LinkedIn</a>
          </div>
        </div>
        <div class="person">
          <div class="image">
            <img src="~assets//images/img_andy.jpg" class="hidden">
          </div>
          <div class="person__info h__white t__white">
            <h3>Dr. Andy Hock</h3>
            <p>
              Director of Product
              <br>Cerebras Systems
            </p>
            <a
              class="button button__teal"
              target="_blank"
              href="https://www.linkedin.com/in/andyhock/"
            >Visit LinkedIn</a>
          </div>
        </div>
        <div class="person">
          <div class="image">
            <img src="~assets//images/img_drew.jpg" class="hidden">
          </div>
          <div class="person__info h__white t__white">
            <h3>Dr. Drew Conway</h3>
            <p>
              Founder & CEO
              <br>Alluvium
            </p>
            <a
              class="button button__teal"
              target="_blank"
              href="https://www.linkedin.com/in/drew-conway-13b5b013/"
            >Visit LinkedIn</a>
          </div>
        </div>
        <div class="person">
          <div class="image">
            <img src="~assets//images/img_marty.jpg" class="hidden">
          </div>
          <div class="person__info h__white t__white">
            <h3>Dr. Marty Buchheim</h3>
            <p>Director, Data Science & Analytics Lab | American Family Insurance</p>
            <a
              class="button button__teal"
              target="_blank"
              href="https://www.linkedin.com/in/martybuchheim/"
            >Visit LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
    <section class="bgImage about bgImage-about fullHeight">
      <div class="background careers"></div>
      <article class="ltBlue">
        <div>
          <h5 class="bgImage__title vertText h__white">About Us</h5>
          <div class="bgImage__content h__white">
            <h4>Careers</h4>
            <p>We are growing rapidly and looking for talented, passionate, and driven individuals to join our diverse team. Are you passionate about Applied Machine Learning? Data Science? an Engineer who loves building highly scalable and efficient systems on AWS?</p>
            <p>
              Email us at
              <a class="dkBlue" href="mailto:careers@arturo.ai">careers@arturo.ai</a> or check out our current openings at LinkedIn.
            </p>
            <a
              class="button button__darkBlue"
              href="http://www.linkedin.com/company/arturoai/about/"
            >Visit LinkedIn</a>
          </div>
        </div>
      </article>
    </section>
    <Footer/>
  </div>
</template>

<script>
import ScrollForMore from "@/components/ScrollForMore";
import Footer from "@/layouts/partials/footer";
export default {
  components: {
    ScrollForMore,
    Footer
  },
  head() {
    return {
      title: "About Us | Arturo",
      meta: [{ hid: "description", name: "description", content: "About Us" }]
    };
  },
  mounted() {
    var animateHTML = function() {
      var elems;
      var windowHeight;
      function init() {
        elems = document.querySelectorAll(".hidden");
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
      }
      function addEventHandlers() {
        window.addEventListener("scroll", checkPosition);
        window.addEventListener("resize", init);
        checkPosition();
      }
      function checkPosition() {
        for (var i = 0; i < elems.length; i++) {
          var positionFromTop = elems[i].getBoundingClientRect().top;
          if (positionFromTop - windowHeight <= -200) {
            elems[i].className = elems[i].className.replace(
              "hidden",
              "fade-in-element"
            );
          }
        }
      }
      return {
        init: init
      };
    };
    animateHTML().init();
  }
};
</script>

<style lang="scss" scoped>
.squish-image {
  background-image: url("~assets/images/img_hero_aboutus_v2.png");
}
.cards {
  .image {
    background-image: url("~assets/images/img_hero_aboutus.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.careers {
  background-image: url("~assets/images/img_aboutus_careers.jpg");
  background-size: contain;
  background-position: center left;
  width: 35%;
}

.bgImage-about {
  @media (max-width: 868px) {
    article{
      padding: 0 2rem 0 8rem;
      .bgImage__content{
        width: 100%;
      }
    }
  }
  @media (max-width: 745px) {
    .careers {
      display: none;
    }
    article {
      width: 100%;
      height: auto;
      padding: 2rem;
    }
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in-element {
  animation: fade-in 0.75s;
}

.hidden {
  opacity: 0;
  transition: all 0.75s ease;
}

@media (max-width: 1100px) {
  .cards__right {
    .card {
      width: 90%;
      div {
        width: 100%;
        .card__content {
          padding: 0 2rem 0 2rem;
        }
      }
    }

    .image {
      display: none;
    }
  }
}

@media (max-width: 1000px) {
  /*
  height: auto;
  justify-content: flex-start;
  */
  .card {
    height: auto;
    padding: 2em 0;
    div {
      width: 80%;
    }
  }

  &.cards__right {
    justify-content: flex-end;
    .image {
      display: none;
    }
  }
}
</style>

