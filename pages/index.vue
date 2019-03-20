<template>
    <div>
<section class="hero">
        <div class="hero__content">
            <img src="~assets/images/arturo_white_logo.svg">
                <div class="h__white">
                    <h1>Enables understanding of the physical world</h1>
                </div>
            </div>
        </section>
        <section class="counting">
            <h4>AI Insights delivered & counting</h4>
            <h2 id="countUp">1234</h2>
        </section>
        <section id="bgImage1" class="bgImage fullHeight">
            <div class="background" style="background-image: url('~assets/images/img_01_home.jpg');"></div>
            <article class="blue">
                <div>
                    <h5 class="bgImage__title vertText h__white">What we do</h5>
                    <div class="bgImage__content h__white">
                        <h4 class="number">01<span>/03</span>
                        </h4>
                        <h4>Delivering physical property characteristics and predictive analysis</h4>
                    </div>
                </div>
            </article>
        </section>
        <section id="bgImage2" class="bgImage bgImage__right fullHeight">
            <div class="background" style="background-image: url('~assets/images/img_02_home.jpg');"></div>
            <article class="red">
                <div>
                    <h5 class="bgImage__title vertText h__white">What we do</h5>
                    <div class="bgImage__content h__white">
                        <h4 class="number">02<span>/03</span>
                        </h4>
                        <h4>Understanding activity patterns to better understand risk</h4>
                    </div>
                </div>
            </article>
        </section>
        <section id="bgImage3" class="bgImage fullHeight">
            <div class="background" style="background-image: url('~assets/images/img_03_home_tanks.jpg');"></div>
            <article class="ltBlue">
                <div>
                    <h5 class="bgImage__title vertText h__white">What we do</h5>
                    <div class="bgImage__content h__white">
                        <h4 class="number">03<span>/03</span>
                        </h4>
                        <h4>Analysis for developing countries enabling creation of new markets</h4>
                    </div>
                </div>
            </article>
        </section>
        <section id="logos" class="logos fullHeight bg__dkBlue">
            <article id="pin1">
                <h5 class="vertText">Our Customers</h5>
                <div class="logos__block">
                    <div>
                        {% include 'partials/icons/customer-logos/kin_logo_white.svg'%}</div>
                    <div>
                        {% include 'partials/icons/customer-logos/roofr_logo_white.svg'%}</div>
                    <div>
                        {% include 'partials/icons/customer-logos/hippo_logo_white.svg'%}</div>
                    <div>
                        {% include 'partials/icons/am_fam_logo_white.svg'%}</div>
                </div>
            </article>
        </section>
        <section class="cards cards__right fullHeight" style="background: white;">
            <div class="image" style="background-image: url('~assets/images/img_careers.jpg');"></div>
            <article class="card card__blue">
                <div>
                    <h5 class="card__title vertText h__white">WHY WE’RE BETTER</h5>
                    <div class="card__content h__white">
                        <h4>01<span>/03</span>
                        </h4>
                        <h4>Transparency</h4>
                        <p>We constantly assess our model’s performance and publish our performance metrics</p>
                        <a class="button button__white button__white-blue" href="#">/Link</a>
                    </div>
                </div>
            </article>
        </section>
        <section class="cards fullHeight">
            <article class="card card__red">
                <div>
                    <h5 class="card__title vertText h__white">WHY WE’RE BETTER</h5>
                    <div class="card__content h__white">
                        <h4>02<span>/03</span>
                        </h4>
                        <h4>Full-loop™ deep learning</h4>
                        <p>Our proprietary deep learning methodology doesn’t end with a model’s output, but harnesses feedback loops to automatically improve quality and performance over time.</p>
                    </div>
                </div>
            </article>
            <div class="image" style="background-image: url('~assets/images/img_home_fullloop@2x.jpg'); background-size: contain; background-repeat: no-repeat"></div>
        </section>
        <section class="cards cards__right fullHeight">
            <div class="image" style="background-image: url('~assets/images/img_home_proprietary.jpg');"></div>
            <article class="card card__ltBlue">
                <div>
                    <h5 class="card__title vertText h__white">WHY WE’RE BETTER</h5>
                    <div class="card__content h__white">
                        <h4>03<span>/03</span>
                        </h4>
                        <h4>Access to exclusive proprietary data sources</h4>
                        <p>We have access to proprietary and exclusive data no other providers have.</p>
                    </div>
                </div>
            </article>
        </section>
        <section class="process fullHeight">
            <article class="process__card">
                <div>
                    <h5 class="process__title vertText h__white">Our Process</h5>
                    <div class="process__content t__white h__white">
                        <div class="process__item">

                            <img src="~assets/images/icon_proprietarty.svg">
                            <h4>01<span>/03</span>
                            </h4>
                            <p>Arturo uses proprietary data to develop differentiated and transparent models</p>
                        </div>
                        <div class="process__item">
                            <img src="~assets/images/icon_models.svg">
                            <h4>02<span>/03</span>
                            </h4>
                            <p>These models process the most recent input data available including images, mobile device, property records, and weather data</p>
                        </div>
                        <div class="process__item">

                            <img src="~assets/images/icon_ui.svg">
                            <h4>03<span>/03</span>
                            </h4>
                            <p>Our customers use our API and UI to easily integrate these insights within their existing workflows</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </div>
</template>

<script>

export default {

}
</script>

<style>

</style>
