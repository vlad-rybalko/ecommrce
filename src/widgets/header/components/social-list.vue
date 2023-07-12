<template>
    <div :class="$style.list">
        <NuxtLink to="/" :class="$style.link">
            <Vk :class="$style.icon" />
        </NuxtLink>
        <NuxtLink to="/" :class="$style.link">
            <Tg :class="$style.icon" />
        </NuxtLink>
        <NuxtLink to="/" :class="$style.link">
            <Ok :class="$style.icon" />
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import Ok from 'shared/images/icons/socials/ok.svg?component';
import Vk from 'shared/images/icons/socials/vk.svg?component';
import Tg from 'shared/images/icons/socials/tg.svg?component';
</script>

<style lang="scss" module>
.list {
    display: flex;
    gap: 10px;
}
.link {
    display: flex;
    align-items: center;
}
.icon {
    height: 24px;
    width: 24px;
    fill: $ds-color-neutral;
    cursor: pointer;
    &:hover {
        fill: $ds-color-primary;
        color: $ds-color-primary;
    }
}
</style>
