<template>
    <div class="card" :class="CardDirection[direction]">
        <div class="card__header">
            <slot name="header"></slot>
        </div>
        <div class="card__body">
            <slot name="body"></slot>
        </div>
        <div class="card__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { CardDirection } from './lib/types';

export default defineComponent({
    name: 'card',
    props: {
        direction: {
            type: CardDirection,
            default: CardDirection.column,
        },
    },
    data() {
        return {
            CardDirection,
        };
    },
});
</script>

<style>
.card {
    display: flex;
}
.card_column {
    flex-direction: column;
}
.card_row {
    flex-direction: row;
}
</style>
