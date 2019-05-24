<template>
    <div id="scroll" class="scroll">
        Scroll for more
        <ScrollIcon/>
    </div>
</template>

<script>
    import ScrollIcon from "@/components/icons/scrollIcon.svg?inline";
    export default {
        components: { ScrollIcon },
        mounted() {
            var scrollStop = function (callback) {
            // Make sure a valid callback was provided
            if (!callback || typeof callback !== 'function') return;
            // Setup scrolling variable
            var isScrolling;
            // Listen for scroll events
            window.addEventListener('scroll', function (event) {
                // Clear our timeout throughout the scroll
                window.clearTimeout(isScrolling);
                // Set a timeout to run after scrolling ends
                isScrolling = setTimeout(function() {
                // Run the callback
                callback();
                }, 500);
            }, false);
            };

            window.onscroll = function (e) {
                var scroll = document.getElementById('scroll');
                if (scroll) {
                    scroll.classList.add('hidden');
                }
            };

            scrollStop(function () {
                var scroll = document.getElementById('scroll');
                scroll.classList.remove('hidden');
            });
        }
    };
</script>
<style lang="scss" scoped >
    .scroll {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        z-index: 999;
        left: 50%;
        color: $color_teal;
        font-weight: bold;
        transition: opacity .5s ease;
        transform: translateX(-50%);

        svg {
            fill: $color_teal;
            width: 2.5rem;
            height: 2.5rem;
            position: relative;
            animation: breath .75s alternate linear infinite;
        }
        &.hide, &.hide-from-footer {
            opacity: 0;
        }
    }

    @keyframes breath {
        0% {
            top: -6px;
        }

        50% {
            top: 0px;
        }

        100% {
            top: 6px;
        }
    }
</style>