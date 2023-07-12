<template>
    <div class="ds-loader">
        <div class="loader" :class="size">
            <div class="circle-1"></div>
            <div class="circle-2"></div>
            <div class="circle-3"></div>
            <div class="circle-4"></div>
            <div class="circle-5"></div>
            <div class="circle-6"></div>
            <div class="circle-7"></div>
            <div class="circle-8"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import { LoaderSize } from './lib/types';

@Component
export default class Loader extends Vue {
    @Prop({ default: LoaderSize.Medium }) readonly size!: LoaderSize;
}
</script>

<style lang="scss" scoped>
.ds-loader {
    border-radius: 10px;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    background: white;
    opacity: 0.8;

    display: flex;
    align-items: center;
    justify-content: center;
}
.loader {
    position: relative;
}

.loader_medium {
    width: 60px;
    height: 60px;
}
.loader_smedium {
    width: 40px;
    height: 40px;
}
.loader_small {
    width: 28px;
    height: 28px;
}
.loader_msmall {
    width: 19px;
    height: 19px;
}
.loader_xsmall {
    width: 15px;
    height: 15px;
}

.loader div {
    background-color: #8dc537;
    height: 16.7%;
    width: 16.7%;
    border-radius: 50%;
    position: absolute;
    animation: sk-wave-stretch-delay 1.5s infinite ease-in-out;
}

.loader .circle-1 {
    top: 0;
    left: 41.7%;
    animation-delay: -1.5s;
}

.loader .circle-2 {
    top: 12.5%;
    left: 70.8%;
    animation-delay: -1.3125s;
}

.loader .circle-3 {
    top: 41.7%;
    left: 83.3%;
    animation-delay: -1.125s;
}

.loader .circle-4 {
    top: 70.8%;
    left: 70.8%;
    animation-delay: -0.9375s;
}

.loader .circle-5 {
    top: 83.3%;
    left: 41.7%;
    animation-delay: -0.75s;
}

.loader .circle-6 {
    top: 70.8%;
    left: 12.5%;
    animation-delay: -0.5625s;
}

.loader .circle-7 {
    top: 41.7%;
    left: 0;
    animation-delay: -0.375s;
}

.loader .circle-8 {
    top: 12.5%;
    left: 12.5%;
    animation-delay: -0.1875s;
}

@keyframes sk-wave-stretch-delay {
    0%,
    100% {
        transform: scale(0.4);
        opacity: 0.4;
    }

    20% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
