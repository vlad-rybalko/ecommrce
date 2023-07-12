<template>
    <div class="" :class="ContainerType[shape]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ContainerType } from 'shared/ui-kit/layout/container/lib/types/containerType';

export default defineComponent({
    name: 'container',
    props: {
        shape: {
            type: String as PropType<ContainerType>,
            default: ContainerType.round,
        },
    },
    data() {
        return {
            ContainerType,
        };
    },
});
</script>

<style lang="scss">
//.container {
//    background-color: antiquewhite;
//    &_round {
//        border-radius: 10px;
//    }
//}
</style>
