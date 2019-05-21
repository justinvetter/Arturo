<template>
    <div class="footer__top">
        <div class="footer__top__card">
            <div class="card-left">
                <h3 class="h__dkBlue">Request a demo</h3>
                <p class="t__dkBlue"
                >Would you like to receive a demo of one of our amazing products? Click the link below to fill out a quick form, we promise we will not share any of your information we gather with third party companies.</p>
                <a class="button" v-on:click="show">Get the demo</a>
            </div>
            <div class="vr"></div>
            <div class="card-right">
                <MediumIcon/>
                <h5 class="h__dkBlue">Subscribe to our blog on Medium</h5>
                <a class="button" href="https://medium.com/@arturo.ai" target="_blank">Visit Blog</a>
            </div>
        </div>
        <Modal/>
    </div>
</template>

<script>
    import MediumIcon from "@/components/icons/Medium-icon/medium_icon_white.svg?inline";
    import Modal from "@/components/Modal";

    export default {
    components: {
        MediumIcon,
        Modal
    },
    methods: {
        show() {
        this.$modal.show("demo");
        }
    }
    };
</script>

<style>
</style>
